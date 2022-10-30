import { FastifyInstance, FastifyRequest } from 'fastify';
import { API } from '@server/types';

const schema = {
  response: {
    200: {
      type: 'object',
      properties: {
        hello: { type: 'string' },
      },
    },
  },
};

const v2Routes = (fastify: FastifyInstance, ops, done) => {
  fastify.get('/', { schema }, getV2RouteCtrl);

  done();
};

const getV2RouteCtrl = (
  request: FastifyRequest,
  reply: API.IReplyWithPayload<{ hello: string }>
): void => {
  reply.send({ hello: 'world v2' });
};

export default v2Routes;