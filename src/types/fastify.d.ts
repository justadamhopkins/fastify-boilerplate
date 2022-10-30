import { FastifyRequest } from 'fastify';

declare module 'fastify' {
  export interface FastifyInstance<
    HttpServer = Server,
    HttpRequest = IncomingMessage,
    HttpResponse = ServerResponse
  > {
    PORT: string;
    BUILD_ENV: string;
    getHeaderValue(headerKey: string, req: FastifyRequest): string | undefined;
  }
}