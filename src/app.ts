import path from 'path';

import autoLoad from '@fastify/autoload';
import cors from '@fastify/cors';
import fastifyEnv from '@fastify/env';
import fastifyRedis from '@fastify/redis';
import { allowedCorsDomains } from '@server/types/constants/api';
import { HTTP_OK } from '@server/types/constants/statusCodes';
import {
  globalErrorHandler,
  notFoundHandler,
} from '@server/utils/handlers/errors';
import fastify, { FastifyInstance } from 'fastify';

const schema = {
  type: 'object',
  required: ['PORT', 'BUILD_ENV', 'REDIS_HOST'],
  properties: {
    PORT: {
      type: 'string',
      default: 3000,
    },
    BUILD_ENV: {
      type: 'string',
      default: 'local',
    },
    REDIS_HOST: {
      type: 'string',
      default: '127.0.0.1',
    },
    REDIS_PORT: {
      type: 'string',
      default: '6379',
    },
  },
};

const options = {
  schema: schema,
  dotenv: {
    path: path.resolve(__dirname, `../configs/env.${process.env.BUILD_ENV}`),
  },
};

export const build = async (opts = {}): Promise<FastifyInstance> => {
  const app = fastify(opts);
  app.register(fastifyEnv, options);
  await app.after();

  app.register(cors, {
    origin: allowedCorsDomains,
    optionsSuccessStatus: HTTP_OK,
  });

  app.register(fastifyRedis, { host: app.config.REDIS_HOST });

  app.register(autoLoad, {
    dir: path.join(__dirname, 'plugins/global'),
    options: Object.assign({}, opts),
    encapsulate: false,
  });

  app.register(autoLoad, {
    dir: path.join(__dirname, 'plugins/scoped'),
    options: Object.assign({}, opts),
  });

  app.register(autoLoad, {
    dir: path.join(__dirname, 'routes'),
    ignorePattern: /.*(test).ts/,
    autoHooks: true,
    cascadeHooks: true,
    options: Object.assign({ prefix: '/api' }, opts),
  });

  app.setNotFoundHandler(notFoundHandler);
  app.setErrorHandler(globalErrorHandler);

  return app;
};