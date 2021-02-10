import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';

describe('user queries', () => {
  let server = express();
  beforeAll(() => {
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    )
  })

  it('can successfully query users names', async (done) => {
    const response = await request(server)
      .post('/')
      .send({query: '{users {name} }'})
      .expect(200)

    expect(response.body.data.users.length).toBe(2)
    done();
  })
})
