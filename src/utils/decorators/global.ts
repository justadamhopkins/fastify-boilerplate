import {FastifyInstance} from "fastify";

const globalDecorators = (fastify: FastifyInstance, options, done): void => {
    fastify.decorate('add', (a: number, b: number) => a + b)

    done()
}

export default globalDecorators