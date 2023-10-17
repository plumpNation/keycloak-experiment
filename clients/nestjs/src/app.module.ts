import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';

import { AppController } from './app.controller';
import { AuthController } from './auth.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl:
        'http://localhost:8080/realms/demo/protocol/openid-connect/auth',
      realm: 'demo',
      clientId: 'demo-nestjs-app',
      // Secret key of the client taken from keycloak server
      secret: 'R2UwT7lNwbDHGCoD9BjgoxwoxMT0mFYg',
    }),
  ],
  controllers: [AppController, AuthController],
  // https://docs.nestjs.com/providers
  providers: [
    AppService,
    // This adds a global level authentication guard,
    // you can also have it scoped if you like.
    //
    // Will return a 401 unauthorized when it is unable to
    // verify the JWT token or Bearer header is missing.
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    // This adds a global level resource guard, which is permissive.
    // Only controllers annotated with @Resource and
    // methods with @Scopes are handled by this guard.
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    // New in 1.1.0
    // This adds a global level role guard, which is permissive.
    // Used by `@Roles` decorator with the
    // optional `@AllowAnyRole` decorator for allowing any
    // specified role passed.
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
