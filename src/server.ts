import {build} from "./app";
import fastify from "fastify";

const DEFAULT_PORT = 5000

const startServer = async () => {
    try {
        const app = build({logger: true});
        console.log('fired')
        await app.listen({port: DEFAULT_PORT})
    } catch (err) {
        fastify().log.error(err)
        process.exit(1)
    }
}

startServer()