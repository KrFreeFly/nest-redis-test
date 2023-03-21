import { UserRoles } from '../../roles/dto/roles.dto';

export class User {
  id: number;
  login: string;
  passwordHash: string;
  role?: UserRoles;
}
