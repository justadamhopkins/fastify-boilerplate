import { build } from '@server/app';
import { HTTP_OK } from '@server/types/constants/statusCodes';

describe('v1/api', () => {
  test('should call the endpoint', async () => {
    const app = await build();

    const { statusCode, json } = await app.inject().get('/api/v1/');

    expect(statusCode).toEqual(HTTP_OK);
    expect(json()).toEqual({ hello: 'world v1' });
  });
});