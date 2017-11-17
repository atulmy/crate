// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as product from './product/fields/mutations'
import * as user from './user/fields/mutations'

// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: 'API Mutations [Create, Update, Delete]',

    fields: {
        ...product,
        ...user
    }
})

export default mutation
