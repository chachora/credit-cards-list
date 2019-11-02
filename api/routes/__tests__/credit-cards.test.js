const request = require('supertest');
const app = require('../../app');

const data = {
  name: 'Alice',
  number: '4242424242424242',
  limit: 5000,
};

describe('Credit cards endpoints', () => {
  it('should add new card with balance 0', () => {
    return request(app)
      .post('/credit-cards')
      .send(data)
      .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ ...data, balance: 0 });
      });
  });
});
