import { Controller, Get } from '@nestjs/common'
import { PokemonsGqlService } from 'src/pokemons-gql/pokemons-gql.service'

@Controller('pokemons-api')
export class PokemonsApiController {
  constructor(private readonly pokemonGqlService: PokemonsGqlService) {}

  @Get('pokemons')
  getPokemons() {
    return this.pokemonGqlService.getPokemons()
  }
}
