import { Injectable } from '@nestjs/common';
import { CreatePassTypeDto } from './dto/create-pass-type.dto';
import { UpdatePassTypeDto } from './dto/update-pass-type.dto';
import { PassType } from './dto/pass-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import PassTypes from './pass-types.model';

@Injectable()
export class PassTypesService {
  constructor(
    @InjectModel(PassTypes)
    private passTypesModel: typeof PassTypes,
  ) {}

  create(createPassTypeDto: CreatePassTypeDto) {
    return 'This action adds a new passType';
  }

  async findAll(): Promise<{
    items: PassType[];
    total: number;
  }> {
    const { rows, count } = await this.passTypesModel.findAndCountAll({
      raw: true,
      nest: true,
    });
    return {
      items: rows,
      total: count,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} passType`;
  }

  update(id: number, updatePassTypeDto: UpdatePassTypeDto) {
    return `This action updates a #${id} passType`;
  }

  remove(id: number) {
    return `This action removes a #${id} passType`;
  }
}
