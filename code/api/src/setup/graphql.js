// Imports
import graphqlHTTP from 'express-graphql'

// App Imports
import config from '../config/config.json'
import authentication from './authentication'
import schema from '../modules/schema'

// Setup GraphQL
export default function(server) {
    console.info('SETUP - GraphQL...')

    server.use(authentication)

    // API (GraphQL on route `/api`)
    server.use(config.graphql.endpoint, graphqlHTTP(request => ({
        schema,
        graphiql: config.graphql.ide,
        pretty: config.graphql.pretty,
        context: {
            auth: {
                user: request.user,
                isAuthenticated: request.user && request.user.id > 0
            }
        }
    })))
}