import { Test, TestingModule } from '@nestjs/testing';
import { AppSchemeController } from './app-scheme.controller';

describe('AppSchemeController', () => {
  let controller: AppSchemeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppSchemeController],
    }).compile();

    controller = module.get<AppSchemeController>(AppSchemeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
