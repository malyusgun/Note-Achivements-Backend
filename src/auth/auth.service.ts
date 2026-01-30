import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma/prisma.service';
import { IAuthLogin } from './types';
import * as bcrypt from 'bcrypt';
import { IUser } from '../users/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(data: IUser) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(data.password, salt);
    const user = { ...data, password: hashedPassword };
    await this.usersService.createUser(user);

    const payload = { sub: user.userId, nickname: user.nickname };

    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: await this.jwtService.signAsync(payload),
    };
  }

  async login(data: IAuthLogin) {
    const user = await this.usersService.getUser(data.nickname);

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    const isPasswordMatch = await bcrypt.compare(user.password, data.password);

    if (!isPasswordMatch) {
      throw new ForbiddenException('Неверный пароль');
    }

    const payload = { sub: user.userId, nickname: user.nickname };

    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: await this.jwtService.signAsync(payload),
    };
  }

  async logout() {}
}
