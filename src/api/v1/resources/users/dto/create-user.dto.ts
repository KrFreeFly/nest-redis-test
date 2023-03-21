import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNumberString()
  @IsOptional()
  roleId?: number;

  @IsNumberString()
  @IsOptional()
  phone?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  login?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  vk?: string;

  @IsString()
  @IsOptional()
  insta?: string;

  @IsDateString()
  @IsOptional()
  birthDate?: string;
}
