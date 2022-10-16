import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const v1Routes = (fastify: FastifyInstance, ops, done) => {
  fastify.get('/', (request: FastifyRequest, reply: FastifyReply): void => {
    reply.send({ hello: 'world v1' });
  });

  done();
};

export default v1Routes;