import { Test, TestingModule } from '@nestjs/testing';
import { PassTypesService } from './pass-types.service';

describe('PassTypesService', () => {
  let service: PassTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassTypesService],
    }).compile();

    service = module.get<PassTypesService>(PassTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
