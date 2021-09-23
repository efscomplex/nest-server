import { Query, Resolver } from '@nestjs/graphql'
import { PokemonsGqlService } from 'src/pokemons-gql/pokemons-gql.service'

@Resolver()
export class PokemonsGqlResolver {
  constructor(private pokemonsService: PokemonsGqlService) {}

  @Query()
  pokemons() {
    return this.pokemonsService.getPokemons()
  }
}
