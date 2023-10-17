import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import type { WithMessage } from './types/response.types';
// import { RoleMatchingMode, Roles, Unprotected } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  // Here is the use of the @Injectable AppService
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('home')
  home(): WithMessage {
    return { message: this.appService.getHomeContent() };
  }

  @Get('/login')
  @Render('login')
  login(): void {
    return;
  }

  // @Get()
  // @Unprotected()
  // getpublic(): string {
  //   return `${this.appService.getHello()} from public`;
  // }

  // @Get('/user')
  // @Roles({ roles: ['user'] })
  // getUser(): string {
  //   return `${this.appService.getHello()} from user`;
  // }

  // @Get('/admin')
  // @Roles({ roles: ['admin'] })
  // getAdmin(): string {
  //   return `${this.appService.getHello()} from admin`;
  // }

  // @Get('/all')
  // @Roles({ roles: ['admin', 'user'], mode: RoleMatchingMode.ANY })
  // getAll(): string {
  //   return `${this.appService.getHello()} from all`;
  // }
}
