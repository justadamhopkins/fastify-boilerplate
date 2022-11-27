import { getHeaderValue } from '@server/utils/http/headers';
import { FastifyInstance } from 'fastify';

const globalDecorators = (fastify: FastifyInstance, options, done): void => {
  fastify.decorate('getHeaderValue', getHeaderValue);

  done();
};

export default globalDecorators;