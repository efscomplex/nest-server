import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PokemonsApiModule } from './pokemons-api/pokemons-api.module'

@Module({
  imports: [PokemonsApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
