import {
  FastifyReplyType,
  FastifyTypeProviderDefault,
} from 'fastify/types/type-provider';
import {
  FastifyReply,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteGenericInterface,
} from 'fastify';
import { ContextConfigDefault } from 'fastify/types/utils';
import { FastifySchema } from 'fastify/types/schema';

export declare namespace API {
  export interface IReplyWithPayload<Payload extends FastifyReplyType>
    extends FastifyReply<
      RawServerDefault,
      RawRequestDefaultExpression,
      RawReplyDefaultExpression,
      RouteGenericInterface,
      ContextConfigDefault,
      FastifySchema,
      FastifyTypeProviderDefault,
      Payload
    > {}
}