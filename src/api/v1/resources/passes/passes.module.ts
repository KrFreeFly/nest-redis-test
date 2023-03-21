import { Module } from '@nestjs/common';
import { PassesService } from './passes.service';
import { PassesController } from './passes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Passes from './passes.model';

@Module({
  imports: [SequelizeModule.forFeature([Passes])],
  exports: [SequelizeModule],
  controllers: [PassesController],
  providers: [PassesService],
})
export class PassesModule {}
