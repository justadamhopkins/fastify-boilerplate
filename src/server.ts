import fastify from 'fastify';

import { build } from './app';

const DEFAULT_PORT = 5000;

const startServer = async () => {
  try {
    const app = await build({ logger: true });
    await app.listen({ port: DEFAULT_PORT });
  } catch (err) {
    console.error(err);
    fastify().log.error(err);
    process.exit(1);
  }
};

startServer();