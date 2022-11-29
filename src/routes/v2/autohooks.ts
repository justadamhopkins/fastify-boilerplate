import { getCache } from '@server/utils/cache/getCache';
import { setCache } from '@server/utils/cache/setCache';
import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  HookHandlerDoneFunction,
} from 'fastify';

const autoHooks = (fastify: FastifyInstance, ops, done) => {
  fastify.addHook(
    'onRequest',
    (
      request: FastifyRequest,
      reply: FastifyReply,
      done: HookHandlerDoneFunction
    ) => getCache(request, reply, done)
  );
  fastify.addHook(
    'onSend',
    (
      request: FastifyRequest,
      reply: FastifyReply,
      done: HookHandlerDoneFunction
    ) => setCache(request, reply, done)
  );

  done();
};

export default autoHooks;