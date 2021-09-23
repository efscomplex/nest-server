import { Injectable } from '@nestjs/common'
import { request } from 'graphql-request'
import { Pokemon } from 'src/pokemons-gql/models'
import pokemonsQuery from 'src/pokemons-gql/resources/pokemonsQuery'

@Injectable()
export class PokemonsGqlService {
  public POKEMONS_URL = 'https://graphql-pokeapi.graphcdn.app/'

  async getPokemons(): Promise<Pokemon[]> {
    return request(this.POKEMONS_URL, pokemonsQuery).then(
      (resp) => resp.pokemons.results,
    )
  }
}
