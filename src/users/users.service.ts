import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersResponseDto } from './dto/users-response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async getAllUsers(): Promise<UsersResponseDto> {
    const users = await this.prisma.user.findMany();
    return { items: users || [] };
  }

  async getUser(userId: string): Promise<UserResponseDto | null> {
    return this.prisma.user.findUnique({
      where: { userId },
    });
  }

  async createUser(dto: CreateUserDto): Promise<UserResponseDto> {
    return this.prisma.user.create({
      data: dto,
    });
  }

  async editUser(dto: UpdateUserDto): Promise<UserResponseDto> {
    return this.prisma.user.update({
      where: {
        userId: dto.userId,
      },
      data: dto,
    });
  }

  async deleteUser(userId: string): Promise<UserResponseDto> {
    return this.prisma.user.delete({
      where: { userId },
    });
  }
}
