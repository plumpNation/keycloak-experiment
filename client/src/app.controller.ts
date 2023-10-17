import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import type { WithMessage } from './types/response.types';
import { RoleMatchingMode, Roles } from 'nest-keycloak-connect';

@Controller()
@Roles({ roles: ['admin', 'user'], mode: RoleMatchingMode.ANY })
export class AppController {
  // Here is the use of the @Injectable AppService
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('home')
  home(): WithMessage {
    return { message: this.appService.getHomeContent() };
  }
}
