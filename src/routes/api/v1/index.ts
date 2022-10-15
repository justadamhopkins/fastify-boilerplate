import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export enum ETest {
  Test = 'test',
}

const routes = (fastify: FastifyInstance, ops, done) => {
  fastify.get('/', (request: FastifyRequest, reply: FastifyReply): void => {
    reply.send({ hello: 'world v1' });
  });

  done();
};

export default routes;