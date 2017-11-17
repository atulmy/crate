// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as thought from './product/fields/query'
import * as user from './user/fields/query'

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: 'API Queries [Read]',

    fields: () => ({
        ...thought,
        ...user
    })
})

export default query