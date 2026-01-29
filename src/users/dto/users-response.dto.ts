import { UserResponseDto } from './user-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UsersResponseDto {
  @ApiProperty({ type: [UserResponseDto] })
  items: UserResponseDto[];
}
