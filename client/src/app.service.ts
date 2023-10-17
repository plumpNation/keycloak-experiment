import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // This should probably be a database call, but for this example
  // we'll just return a string.
  getHomeContent(): string {
    return 'Welcome to being logged in!';
  }
}
