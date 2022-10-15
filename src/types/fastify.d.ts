import Fastify, {
  FastifyReply,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
} from 'fastify';

declare module 'fastify' {
  interface FastifyInstance extends Fastify {
    config: {
      // this should be same as the confKey in options
      // specify your typing here
      PORT: string;
      BUILD_ENV: string;
    };
  }
}

export interface FastifyReplyWithPayload<Payload extends RouteGenericInterface>
  extends FastifyReply<
    RawServerDefault,
    RawRequestDefaultExpression,
    RawReplyDefaultExpression,
    Payload
  > {}