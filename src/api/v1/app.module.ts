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
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../.env'],
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: +process.env.POSTGRES_PORT || 5432,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadModels: true,
      synchronize: false,
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
