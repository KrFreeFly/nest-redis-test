import { Module } from '@nestjs/common';
import { PassTypesService } from './pass-types.service';
import { PassTypesController } from './pass-types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import PassTypes from './pass-types.model';

@Module({
  imports: [SequelizeModule.forFeature([PassTypes])],
  exports: [SequelizeModule],
  controllers: [PassTypesController],
  providers: [PassTypesService],
})
export class PassTypesModule {}
