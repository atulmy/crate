// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { ProductType } from './type'
import { create, remove } from './resolvers'

// Product create
export const productCreate = {
    type: ProductType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },

        product: {
            name: 'product',
            type: GraphQLString
        }
    },
    resolve: create
}

// Product remove
export const productRemove = {
    type: ProductType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}