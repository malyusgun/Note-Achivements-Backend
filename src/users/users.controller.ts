import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersResponseDto } from './dto/users-response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('')
  async getAllUsers(): Promise<UsersResponseDto> {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Body() userId: string): Promise<UserResponseDto | null> {
    return await this.userService.getUser(userId);
  }

  @Post('add')
  async createUser(@Body() dto: CreateUserDto): Promise<UserResponseDto> {
    return await this.userService.createUser(dto);
  }

  @Patch(':id')
  async editUser(@Body() dto: UpdateUserDto): Promise<UserResponseDto> {
    return await this.userService.editUser(dto);
  }

  @Delete(':id')
  async deleteUser(@Body() userId: string): Promise<UserResponseDto> {
    return await this.userService.deleteUser(userId);
  }
}
