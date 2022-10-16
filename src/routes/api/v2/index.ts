import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const v2Routes = (fastify: FastifyInstance, ops, done) => {
  fastify.get('/', (request: FastifyRequest, reply: FastifyReply): void => {
    reply.send({ hello: 'world v2' });
  });

  done();
};

export default v2Routes;