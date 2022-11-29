import { notFound } from '@hapi/boom';
import { APP_DEBUG_HEADER_KEY } from '@server/types/constants/api';
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
    ): void => {
      const debugHeader =
        fastify.getHeaderValue(APP_DEBUG_HEADER_KEY, request) === 'true';

      if (!debugHeader) {
        done(notFound('Page not found'));
      }

      done();
    }
  );

  done();
};

export default autoHooks;