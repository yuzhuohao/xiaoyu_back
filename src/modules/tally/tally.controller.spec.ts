import { Test, TestingModule } from '@nestjs/testing';
import { TallyController } from './tally.controller';

describe('TallyController', () => {
  let controller: TallyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TallyController],
    }).compile();

    controller = module.get<TallyController>(TallyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
