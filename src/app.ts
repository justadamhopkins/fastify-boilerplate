import path from 'path';

import autoLoad from '@fastify/autoload';
import cors from '@fastify/cors';
import fastifyEnv from '@fastify/env';
import { allowedCorsDomains } from '@server/types/constants/api';
import { HTTP_OK } from '@server/types/constants/statusCodes';
import globalDecorators from '@server/utils/decorators/global';
import fastify, { FastifyInstance } from 'fastify';

const schema = {
  type: 'object',
  required: ['PORT', 'BUILD_ENV'],
  properties: {
    PORT: {
      type: 'string',
      default: 3000,
    },
    BUILD_ENV: {
      type: 'string',
      default: 'local',
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

  app.register(globalDecorators);

  app.register(autoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  app.register(autoLoad, {
    dir: path.join(__dirname, 'routes'),
    ignorePattern: /.*(test).ts/,
  });

  return app;
};