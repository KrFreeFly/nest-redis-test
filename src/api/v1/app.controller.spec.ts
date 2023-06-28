import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './resources/auth/auth.service';
import { UsersService } from './resources/users/users.service';
import { JwtService } from '@nestjs/jwt';
import Users from './resources/users/users.model';
import { getModelToken } from '@nestjs/sequelize';
import Roles from './resources/roles/roles.model';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        AuthService,
        UsersService,
        JwtService,
        { provide: getModelToken(Users), useValue: Users },
        { provide: getModelToken(Roles), useValue: Roles },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });
});
