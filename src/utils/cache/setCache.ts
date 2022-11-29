import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';

export const setCache = async (
  request: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
): void => {
  console.log('setCache');

  return Promise.resolve();
};