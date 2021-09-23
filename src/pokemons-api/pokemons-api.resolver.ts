import { Query, Resolver } from '@nestjs/graphql'
import { PokemonsApiService } from 'src/pokemons-api/pokemons-api.service'

@Resolver()
export class PokemonsApiResolver {
  constructor(private pokemonsService: PokemonsApiService) {}

  @Query()
  pokemons() {
    return this.pokemonsService.getPokemons()
  }
}
