import { Test, TestingModule } from '@nestjs/testing';
import { PassTypesController } from './pass-types.controller';
import { PassTypesService } from './pass-types.service';

describe('PassTypesController', () => {
  let controller: PassTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassTypesController],
      providers: [PassTypesService],
    }).compile();

    controller = module.get<PassTypesController>(PassTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
