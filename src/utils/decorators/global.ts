import { FastifyInstance } from 'fastify';
import { getHeaderValue } from '@server/utils/http/headers';
import fp from 'fastify-plugin';

const globalDecorators = fp((fastify: FastifyInstance, options, done): void => {
  fastify.decorate('getHeaderValue', getHeaderValue);

  done();
});

export default globalDecorators;