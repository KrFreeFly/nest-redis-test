import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import Users from './users.model';
import Roles from '../roles/roles.model';
import { User } from './dto/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { USER_NOT_FOUND } from '../../helpers/errors';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private userModel: typeof Users,
    @InjectModel(Roles)
    private rolesModel: typeof Users,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create({ ...createUserDto });
  }

  async findAll(): Promise<{
    items: Omit<User, 'passwordHash'>[];
    total: number;
  }> {
    const { rows, count } = await this.userModel.findAndCountAll({
      attributes: {
        exclude: ['passwordHash'],
      },
      include: [
        {
          model: this.rolesModel,
          as: 'role',
        },
      ],
      raw: true,
      nest: true,
    });
    return {
      items: rows,
      total: count,
    };
  }

  findOneById(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByLogin(login: string): Promise<User> {
    const user = await this.userModel.findOne({
      where: { login },
      include: [
        {
          model: this.rolesModel,
          as: 'role',
        },
      ],
      raw: true,
      nest: true,
    });
    if (!user) throw new HttpException(USER_NOT_FOUND, 404);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
