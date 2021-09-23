import { PokemonsApiModule } from './pokemons-api/pokemons-api.module'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PokemonsGqlModule } from './pokemons-gql/pokemons-gql.module'
import { UsersModule } from './users/users.module';
import { AppSchemeModule } from './app-scheme/app-scheme.module';

@Module({
  imports: [PokemonsGqlModule, PokemonsApiModule, UsersModule, AppSchemeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
