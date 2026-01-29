import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  nickname: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  favoriteTheme: string;
  @ApiProperty()
  favoriteSecondTheme: string;
}
