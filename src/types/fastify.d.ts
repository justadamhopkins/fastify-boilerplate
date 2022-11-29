/* eslint-disable */
import {FastifyRequest} from 'fastify';

declare module 'fastify' {
  export interface FastifyInstance<
    HttpServer = Server,
    HttpRequest = IncomingMessage,
    HttpResponse = ServerResponse
  > {
    config: {
      PORT: string;
      BUILD_ENV: string;
      REDIS_HOST: string;
      REDIS_PORT: string;
    };

    getHeaderValue(headerKey: string, req: FastifyRequest): string | undefined;
  }
}