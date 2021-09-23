import { PokemonsApiModule } from './pokemons-api/pokemons-api.module'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PokemonsGqlModule } from './pokemons-gql/pokemons-gql.module'
import { UsersModule } from './users/users.module';

@Module({
  imports: [PokemonsGqlModule, PokemonsApiModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
