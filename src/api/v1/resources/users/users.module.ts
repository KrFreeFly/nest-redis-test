import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Users from './users.model';
import Roles from '../roles/roles.model';

@Module({
  imports: [SequelizeModule.forFeature([Users, Roles])],
  exports: [SequelizeModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
