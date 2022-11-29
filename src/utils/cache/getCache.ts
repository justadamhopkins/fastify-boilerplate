import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';

export const getCache = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
): void => {
  console.log('getCache');

  done();
};