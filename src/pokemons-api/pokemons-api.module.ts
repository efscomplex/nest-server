import { PokemonsGqlService } from './../pokemons-gql/pokemons-gql.service'
import { PokemonsApiController } from './pokemons-api.controller'
import { Module } from '@nestjs/common'

@Module({
  providers: [PokemonsGqlService],
  controllers: [PokemonsApiController],
})
export class PokemonsApiModule {}
