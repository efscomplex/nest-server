import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { PokemonsApiService } from 'src/pokemons-api/pokemons-api.service'
import { PokemonsApiResolver } from './pokemons-api.resolver'

@Module({
  providers: [PokemonsApiResolver, PokemonsApiService],
  imports: [
    GraphQLModule.forRoot({
      include: [PokemonsApiModule],
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(__dirname, 'pokemons-api/models/graphql.ts'),
      },
      path: 'pokemons',
    }),
  ],
})
export class PokemonsApiModule {}
