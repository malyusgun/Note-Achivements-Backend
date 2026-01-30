import { Body, Controller, Post } from '@nestjs/common';
import { Public } from './auth.decorator';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('register')
  async register(dto: CreateUserDto) {
    return this.authService.register(dto);
  }

  @Public()
  @Post('login')
  async login(@Body() dto: AuthLoginDto) {
    return this.authService.login(dto);
  }

  @Post('logout')
  async logout(@Body() nickname: string) {
    return this.authService.logout(nickname);
  }
}
