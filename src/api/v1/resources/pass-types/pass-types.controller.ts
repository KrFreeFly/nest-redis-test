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
import { PassTypesService } from './pass-types.service';
import { CreatePassTypeDto } from './dto/create-pass-type.dto';
import { UpdatePassTypeDto } from './dto/update-pass-type.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../roles/roles.decorator';
import { RolesEnum } from '../roles/enums/role.enum';
import { FindOneParams } from '../../helpers/validatiors';

@Controller('pass-types')
export class PassTypesController {
  constructor(private readonly passTypesService: PassTypesService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(RolesEnum.Admin)
  @Post()
  create(@Body() createPassTypeDto: CreatePassTypeDto) {
    return this.passTypesService.create(createPassTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RolesEnum.Admin)
  @Get()
  findAll() {
    return this.passTypesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RolesEnum.Admin)
  @Get(':id')
  findOne(@Param() params: FindOneParams) {
    return this.passTypesService.findOne(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RolesEnum.Admin)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePassTypeDto: UpdatePassTypeDto,
  ) {
    return this.passTypesService.update(+id, updatePassTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(RolesEnum.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passTypesService.remove(+id);
  }
}
