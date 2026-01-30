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
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Body() nickname: string): Promise<UserResponseDto | null> {
    return this.userService.getUser(nickname);
  }

  @Post('add')
  async createUser(@Body() dto: CreateUserDto): Promise<UserResponseDto> {
    return this.userService.createUser(dto);
  }

  @Patch(':id')
  async editUser(@Body() dto: UpdateUserDto): Promise<UserResponseDto> {
    return this.userService.editUser(dto);
  }

  @Delete(':id')
  async deleteUser(@Body() userId: string): Promise<UserResponseDto> {
    return this.userService.deleteUser(userId);
  }
}
