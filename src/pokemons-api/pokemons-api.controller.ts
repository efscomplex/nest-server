import { Controller, Get, Param } from '@nestjs/common'
import { PokemonsGqlService } from 'src/pokemons-gql/pokemons-gql.service'

@Controller('pokemons-api')
export class PokemonsApiController {
  constructor(private readonly pokemonGqlService: PokemonsGqlService) {}
  @Get()
  hello() {
    return 'start fetching pokemons right now!!'
  }

  @Get('pokemons')
  pokemons() {
    return this.pokemonGqlService.getPokemons()
  }

  @Get('pokemons/:id')
  pokemonById(@Param('id') id: number) {
    return this.pokemonGqlService
      .getPokemons()
      .then((pokis) => pokis.find((p) => p.id === +id))
  }
}
