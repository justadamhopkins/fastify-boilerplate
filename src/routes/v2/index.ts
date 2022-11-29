import { API } from '@server/types';
import { FastifyInstance, FastifyRequest } from 'fastify';

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
  reply: API.TReplyWithPayload<{ hello: string }>
): void => {
  reply.send({ hello: 'world v2' });
};

export default v2Routes;