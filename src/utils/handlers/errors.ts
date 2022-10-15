import { FastifyReply, FastifyRequest } from 'fastify';
import { EBuildEnvironment } from '@server/types/enums/env';
import { notFound, Boom } from '@hapi/boom';

export const globalErrorHandler = (
  err: Boom,
  req: FastifyRequest,
  reply: FastifyReply
): FastifyReply => {
  console.log(err);
  const stack = err.stack || '';
  const statusCode = err.output.statusCode || 500;
  const buildEnv = process.env.BUILD_ENV;
  const isDev =
    buildEnv !== EBuildEnvironment.Production &&
    buildEnv !== EBuildEnvironment.Test;

  const extraData = isDev
    ? {
        cause: err.cause,
        stackTrace: stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>'),
      }
    : {
        cause: {
          properties: {
            errors: err?.cause || [],
          },
          statusCode: err?.cause || statusCode,
        },
      };

  return reply.status(statusCode).send({
    message: err.message,
    data: err.data ? err.data : undefined,
    statusCode,
    ...extraData,
  });
};

export const notFoundHandler = (
  req: FastifyRequest,
  reply: FastifyReply
): void => {
  const err = notFound('Route not found!');

  reply.send(err);
};