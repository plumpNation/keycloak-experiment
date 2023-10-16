import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getLogin(): string {
    return '<input name="username" /><input name="password" type="password" /><button type="submit">Login</button>';
  }
}
