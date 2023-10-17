import {
  type ArgumentsHost,
  type ExceptionFilter,
  Catch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import type { Request, Response } from 'express';

/**
 * @see https://docs.nestjs.com/exception-filters
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    if (status === HttpStatus.UNAUTHORIZED) {
      response.redirect('/login');

      return;
    }

    // A nice place to put some logging...

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: 'You hit the HttpExceptionFilter filter!',
    });
  }
}
