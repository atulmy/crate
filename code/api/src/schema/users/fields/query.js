// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import UserType from '../type'
import { getAll, getById } from '../resolvers'

// All
export const users = {
    type: new GraphQLList(UserType),
    resolve: getAll
}

// By ID
export const user = {
    type: UserType,
    args: {
        id: { type: GraphQLInt }
    },
    resolve: getById
}