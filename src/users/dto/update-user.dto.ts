import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UserRequiredFieldsDto {
  @ApiProperty()
  userId: string;
}

export class UpdateUserDto extends IntersectionType(
  PartialType(CreateUserDto),
  UserRequiredFieldsDto,
) {}
