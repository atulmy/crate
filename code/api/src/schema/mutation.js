// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as thought from './thoughts/fields/mutations'
import * as user from './users/fields/mutations'

// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: '...',

    fields: {
        ...thought,
        ...user
    }
})

export default mutation
