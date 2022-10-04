import Fastify from 'fastify';

declare module 'fastify' {
  interface FastifyInstance extends Fastify {
    config: {
      // this should be same as the confKey in options
      // specify your typing here
      PORT: string;
      BUILD_ENV: string;
    };
  }
}
