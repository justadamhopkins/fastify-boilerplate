import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const debugRoutes = (fastify: FastifyInstance, ops, done) => {
  fastify.get(
    '/__headers',
    (request: FastifyRequest, reply: FastifyReply): void => {
      reply.send(request.headers);
    }
  );

  done();
};

export default debugRoutes;