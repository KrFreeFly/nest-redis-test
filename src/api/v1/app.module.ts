import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';
import { AuthModule } from './resources/auth/auth.module';
import { AuthService } from './resources/auth/auth.service';
import { UsersService } from './resources/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ClassesModule } from './resources/classes/classes.module';
import { PassTypesModule } from './resources/pass-types/pass-types.module';
import { PassesModule } from './resources/passes/passes.module';
import { UsersController } from './resources/users/users.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './src/db/sqlite.db',
      autoLoadModels: true,
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../.env'],
    }),
    UsersModule,
    AuthModule,
    ClassesModule,
    PassTypesModule,
    PassesModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, AuthService, UsersService, JwtService],
})
export class AppModule {}
