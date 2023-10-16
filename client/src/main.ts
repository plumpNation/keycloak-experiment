import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  KeycloakConnectModule,
  PolicyEnforcementMode,
  TokenValidation,
} from 'nest-keycloak-connect';

async function bootstrap() {
  KeycloakConnectModule.register({
    authServerUrl: 'http://localhost:8080', // might be http://localhost:8080/auth for older keycloak versions
    realm: 'master',
    clientId: 'my-nestjs-app',
    secret: 'secret',
    policyEnforcement: PolicyEnforcementMode.PERMISSIVE, // optional
    tokenValidation: TokenValidation.ONLINE, // optional
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
