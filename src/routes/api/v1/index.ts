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

const v1Routes = (fastify: FastifyInstance, ops, done) => {
  fastify.get('/', { schema }, getV1RouteCtrl);

  done();
};

const getV1RouteCtrl = (
  request: FastifyRequest,
  reply: API.IReplyWithPayload<{ hello: string }>
): void => {
  reply.send({ hello: 'world v1' });
};

export default v1Routes;