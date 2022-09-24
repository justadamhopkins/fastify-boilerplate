import fastify, {FastifyInstance} from 'fastify'

export const build = (opts = {}): FastifyInstance => {
    const app = fastify(opts);

    return app;
};