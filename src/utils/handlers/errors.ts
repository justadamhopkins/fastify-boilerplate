import { Boom, isBoom, notFound } from '@hapi/boom';
import { EBuildEnvironment } from '@server/types/enums/env';
import { FastifyReply, FastifyRequest } from 'fastify';

export const globalErrorHandler = (
  err: Boom | any,
  req: FastifyRequest,
  reply: FastifyReply
): void => {
  const isBoomErr = isBoom(err);
  const buildEnv = process.env.BUILD_ENV;
  const stack = err.stack || '';
  const isDev =
    buildEnv !== EBuildEnvironment.Production &&
    buildEnv !== EBuildEnvironment.Test;
  const statusCode = isBoomErr ? err.output.statusCode : err.status || 500;

  if (isDev && isBoomErr) {
    err.output.payload.stackTrace = stack.replace(
      /[a-z_-\d]+.js:\d+:\d+/gi,
      '<mark>$&</mark>'
    );
    err.output.payload.cause = err.cause;
  }

  const error = isBoomErr ? err.output.payload : err;

  reply.status(statusCode).send(error);
};

export const notFoundHandler = (
  req: FastifyRequest,
  reply: FastifyReply
): void => {
  const err = notFound('Route not found!');

  reply.send(err);
};