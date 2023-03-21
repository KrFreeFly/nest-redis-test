import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../roles/roles.decorator';
import { RolesEnum } from '../roles/enums/role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RolesEnum.Admin)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto.login) {
      createUserDto.login = `${createUserDto.firstName}${
        createUserDto.lastName
      }${Math.floor(Math.random() * 10 * 1000)}`;
    }

    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RolesEnum.Admin)
  @Get('/')
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
