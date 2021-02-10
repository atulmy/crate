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

  it('can successfully mutate a users style', async (done) => {
    const response = await request(server)
      .post('/')
      .send({ query: 'mutation {userAddStyle(id: 2, survey_results: "Edgy, Edgy, Classy, Casual") { id email style } } '})
      .expect(200)
      expect(response.body).toMatchObject({
        data: {
          userAddStyle: {
              id: 2,
              email: "user@crate.com",
              style: "Edgy"
          }
        }
      })
    done();
  }),

  it('can successfully mutate a users style with a tie for result from survey',
  async (done) => {
    const response = await request(server)
      .post('/')
      .send({ query: 'mutation {userAddStyle(id: 2, survey_results: "Edgy, Edgy, Classy, Classy") { id email style } } '})
      .expect(200)
      expect(response.body).toMatchObject({
        data: {
          userAddStyle: {
              id: 2,
              email: "user@crate.com",
              style: "Edgy,Classy"
          }
        }
      })
    done();
  })
})
