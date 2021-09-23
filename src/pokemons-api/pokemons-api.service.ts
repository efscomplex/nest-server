import { Injectable } from '@nestjs/common'
import { request } from 'graphql-request'
import { Pokemon } from 'src/pokemons-api/models'
import pokemonsQuery from 'src/pokemons-api/resources/pokemonsQuery'

@Injectable()
export class PokemonsApiService {
  public POKEMONS_URL = 'https://graphql-pokeapi.graphcdn.app/'

  async getPokemons(): Promise<Pokemon[]> {
    return request(this.POKEMONS_URL, pokemonsQuery).then(
      (resp) => resp.pokemons.results,
    )
  }
}
