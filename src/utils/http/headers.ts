import { FastifyRequest } from 'fastify';
import { EHeaderKey } from '@server/types/enums/api';

export const getFirstValue = (
  value?: string | string[]
): string | undefined => {
  if (!value) {
    return;
  }
  return Array.isArray(value) ? value[0] : value;
};

export const getHeaderValue = <T extends string>(
  key: string,
  req: FastifyRequest
): string | undefined => getFirstValue(req?.headers[key]) as T;

export const getAppHeaderKey = (
  key: EHeaderKey
): Lowercase<`x-app-${string}`> =>
  `x-app-${key}`.toLowerCase() as Lowercase<`x-app-${string}`>;