import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsApiResolver } from './pokemons-api.resolver';

describe('PokemonsApiResolver', () => {
  let resolver: PokemonsApiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonsApiResolver],
    }).compile();

    resolver = module.get<PokemonsApiResolver>(PokemonsApiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
