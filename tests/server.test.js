import request from 'supertest';
import app from '../app';

describe('GET /', () => {
  test('should return Backend is running ', async () => {
      const response = await request(app).get('/');

      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('<h1>Backend is running</h1>');
  });
});

describe('GET /helth', ()=>{
   test('should return health message', async () => {
      const response = await request(app).get('/health');

      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('<h1>Your app is running</h1>')
   })
})

describe('GET unknown routes', ()=>{
   test('should return 404 message', async () => {
      const response = await request(app).get('/unknown-route');

      expect(response.statusCode).toBe(404);
   })
})