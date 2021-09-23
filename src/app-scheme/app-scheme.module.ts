import { Module } from '@nestjs/common';
import { AppSchemeController } from './app-scheme.controller';
import { AppSchemeService } from './app-scheme.service';

@Module({
  controllers: [AppSchemeController],
  providers: [AppSchemeService]
})
export class AppSchemeModule {}
