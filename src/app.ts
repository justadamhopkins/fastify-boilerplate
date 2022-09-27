import autoLoad from '@fastify/autoload'
import fastify, {FastifyInstance} from 'fastify'
import path from "path";
import cors from '@fastify/cors'
import globalDecorators from "@server/utils/decorators/global";

export const allowedCorsDomains: (string | RegExp)[] = [
    /test\.com$/,
    /localhost:[0-9]{4}$/,
    /local\.lick\.com:[0-9]{4}$/,
];

const HTTP_OK = 200

export const build = (opts = {}): FastifyInstance => {
    const app = fastify(opts);

    app.register(cors, {
        origin: allowedCorsDomains,
        optionsSuccessStatus: HTTP_OK
    })

    app.register(globalDecorators)

    app.register(autoLoad, {
        dir: path.join(__dirname, 'plugins'),
        options: Object.assign({}, opts)
    })

    app.register(autoLoad, {
        dir: path.join(__dirname, 'routes'),
        ignorePattern: /.*(test).ts/,
    })


    return app;
};