import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  getUser(id: string) {
    return this.userService.getUser(id);
  }
}
