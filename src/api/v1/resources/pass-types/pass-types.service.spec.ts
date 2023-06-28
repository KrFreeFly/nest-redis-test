import { Test, TestingModule } from '@nestjs/testing';
import { PassTypesService } from './pass-types.service';
import { getModelToken } from '@nestjs/sequelize';
import PassTypes from './pass-types.model';

describe('PassTypesService', () => {
  let service: PassTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PassTypesService,
        { provide: getModelToken(PassTypes), useValue: PassTypes },
      ],
    }).compile();

    service = module.get<PassTypesService>(PassTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
