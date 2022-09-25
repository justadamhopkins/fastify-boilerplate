import autoLoad from '@fastify/autoload'
import fastify, {FastifyInstance} from 'fastify'
import path from "path";
import cors from '@fastify/cors'

export const allowedCorsDomains: (string | RegExp)[] = [
    /test\.com$/,
    /localhost:[0-9]{4}$/,
    /local\.lick\.com:[0-9]{4}$/,
];

const HTTP_OK = 200

export const build = (opts = {}): FastifyInstance => {
    const app = fastify(opts);

    app.register(cors, {
        origin: false,
        methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
        optionsSuccessStatus: HTTP_OK
    })

    app.register(autoLoad, {
        dir: path.join(__dirname, 'routes'),
        ignorePattern: /.*(test).ts/
    })

    app.register(autoLoad, {
        dir: path.join(__dirname, 'services'),
        ignorePattern: /.*(test).ts/
    })


    return app;
};