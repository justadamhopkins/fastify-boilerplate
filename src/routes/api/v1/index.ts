import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";

const routes = (fastify: FastifyInstance, ops, done) => {
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> => {
        return reply.send({hello: "world v1"});
    });

    done()
}

export default routes