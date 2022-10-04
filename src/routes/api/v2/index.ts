import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const routes = (fastify: FastifyInstance, ops, done) => {
  fastify.get(
    '/',
    async (
      request: FastifyRequest,
      reply: FastifyReply
    ): Promise<FastifyReply> => {
      console.log(request);
      return reply.send({ hello: 'world v2' });
    }
  );

  done();
};

export default routes;