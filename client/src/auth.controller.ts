import { Controller, Get, Render } from '@nestjs/common';
import { Unprotected } from 'nest-keycloak-connect';

@Controller()
export class AuthController {
  constructor() {}

  @Get('/login')
  @Render('login')
  @Unprotected()
  login(): void {
    return;
  }
}
