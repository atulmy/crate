// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as thought from './thoughts/fields/query'
import * as user from './users/fields/query'

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: '...',

    fields: () => ({
        ...thought,
        ...user
    })
})

export default query