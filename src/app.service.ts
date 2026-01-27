import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<any> {
    return await this.prisma.user.findMany();
  }
}
