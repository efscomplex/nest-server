import { AppSchemeService } from './app-scheme.service'
import { Controller, Get } from '@nestjs/common'

@Controller('app-scheme')
export class AppSchemeController {
  constructor(private readonly appSchemeService: AppSchemeService) {}

  @Get('routes')
  getRoutes() {
    return this.appSchemeService.getRoutes()
  }
}
