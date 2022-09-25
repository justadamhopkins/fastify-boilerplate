import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";

const routes = (fastify: FastifyInstance, ops = {}) => {
    
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> => {
        return reply.send({hello: "world"});
    });
}

export default routes