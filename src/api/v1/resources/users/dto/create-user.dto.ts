export class CreateUserDto {
  firstName: string;
  lastName: string;
  roleId: number;
  phone?: string;
  email?: string;
  login?: string;
  password?: string;
  vk?: string;
  insta?: string;
  birthDate?: string;
}
