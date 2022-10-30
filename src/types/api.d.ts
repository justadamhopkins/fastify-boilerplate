import {
  FastifyReply,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteGenericInterface,
} from 'fastify';
import { FastifySchema } from 'fastify/types/schema';
import {
  FastifyReplyType,
  FastifyTypeProviderDefault,
} from 'fastify/types/type-provider';
import { ContextConfigDefault } from 'fastify/types/utils';

export declare namespace API {
  export type TReplyWithPayload<Payload extends FastifyReplyType> =
    FastifyReply<
      RawServerDefault,
      RawRequestDefaultExpression,
      RawReplyDefaultExpression,
      RouteGenericInterface,
      ContextConfigDefault,
      FastifySchema,
      FastifyTypeProviderDefault,
      Payload
    >;
}