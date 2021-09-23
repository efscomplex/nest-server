import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsApiService } from './pokemons-api.service';

describe('PokemonsApiService', () => {
  let service: PokemonsApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonsApiService],
    }).compile();

    service = module.get<PokemonsApiService>(PokemonsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
