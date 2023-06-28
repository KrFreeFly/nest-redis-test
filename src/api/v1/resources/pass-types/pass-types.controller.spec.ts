import { Test, TestingModule } from '@nestjs/testing';
import { PassTypesController } from './pass-types.controller';
import { PassTypesService } from './pass-types.service';
import { getModelToken } from '@nestjs/sequelize';
import PassTypes from './pass-types.model';

describe('PassTypesController', () => {
  let controller: PassTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassTypesController],
      providers: [
        PassTypesService,
        { provide: getModelToken(PassTypes), useValue: PassTypes },
      ],
    }).compile();

    controller = module.get<PassTypesController>(PassTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
