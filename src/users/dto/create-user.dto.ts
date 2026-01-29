import { IsEmail, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString({ message: 'Должна быть строка' })
  readonly userId: string;
  @ApiProperty()
  @IsString({ message: 'Должна быть строка' })
  readonly nickname: string;
  @ApiProperty({ example: 'email@example.com', description: 'Почта' })
  @IsString({ message: 'Должна быть строка' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;
  @ApiProperty()
  @IsString({ message: 'Должна быть строка' })
  readonly favoriteTheme: string;
  @ApiProperty()
  @IsString({ message: 'Должна быть строка' })
  readonly favoriteSecondTheme: string;
  @ApiProperty()
  @Length(8, 16, { message: 'От 8 до 16 символов' })
  @IsString({ message: 'Должна быть строка' })
  readonly password: string;
}
