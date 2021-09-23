import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { PokemonsGqlService } from 'src/pokemons-gql/pokemons-gql.service'
import { PokemonsGqlResolver } from './pokemons-gql.resolver'

@Module({
  providers: [PokemonsGqlResolver, PokemonsGqlService],
  imports: [
    GraphQLModule.forRoot({
      include: [PokemonsGqlModule],
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(__dirname, 'pokemons-api/models/graphql.ts'),
      },
      path: 'pokemons',
    }),
  ],
})
export class PokemonsGqlModule {}
