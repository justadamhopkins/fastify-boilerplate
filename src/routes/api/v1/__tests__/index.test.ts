import { build } from '@server/app';

describe('v1/api', () => {
  test('should call the endpoint', async () => {
    const app = await build();

    const res = await app.inject().get('/api/v1/');
    console.log(res);
    await app.close();
  });
});