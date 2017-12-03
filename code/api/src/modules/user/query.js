// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType, UserLoginType } from './type'
import { getAll, getById, login } from './resolvers'

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

// Auth
export const userLogin = {
    type: UserLoginType,
    args: {
        email: {
            name: 'email',
            type: GraphQLString
        },

        password: {
            name: 'password',
            type: GraphQLString
        }
    },
    resolve: login
}