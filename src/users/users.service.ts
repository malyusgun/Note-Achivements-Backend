import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IUser, IUsers, IUserUpdate } from './types';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async getAllUsers(): Promise<IUsers> {
    const users = await this.prisma.user.findMany();
    return { items: users || [] };
  }

  async getUser(nickname: string): Promise<IUser | null> {
    return this.prisma.user.findUnique({
      where: { nickname },
    });
  }

  async createUser(data: IUser): Promise<IUser> {
    return this.prisma.user.create({
      data,
    });
  }

  async editUser(data: IUserUpdate): Promise<IUser> {
    return this.prisma.user.update({
      where: {
        userId: data.userId,
      },
      data,
    });
  }

  async deleteUser(userId: string): Promise<IUser> {
    return this.prisma.user.delete({
      where: { userId },
    });
  }
}
