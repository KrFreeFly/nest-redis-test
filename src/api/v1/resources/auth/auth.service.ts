import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { checkPassword } from '../../helpers/crypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByLogin(login);
    if (user && checkPassword(password, user.passwordHash)) {
      delete user.passwordHash;
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { login: user.login, id: user.id, role: user.role.name };
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
      }),
      user,
    };
  }
}
