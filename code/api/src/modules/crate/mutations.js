// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import CrateType from './type'
import { create, remove } from './resolvers'

// Crate create
export const crateCreate = {
    type: CrateType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        }
    },
    resolve: create
}

// Crate remove
export const crateRemove = {
    type: CrateType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}