import { RouteDto } from './DTO/route.dto'
import { Injectable } from '@nestjs/common'
import { getRoutes } from 'src/app-scheme/generator'

@Injectable()
export class AppSchemeService {
  getRoutes(): RouteDto[] {
    return getRoutes()
  }
}
