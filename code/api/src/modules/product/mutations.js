// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { ProductType } from './types'
import { create, remove } from './resolvers'

// Product create
export const productCreate = {
    type: ProductType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },

        slug: {
            name: 'slug',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        },

        type: {
            name: 'type',
            type: GraphQLInt
        },

        gender: {
            name: 'gender',
            type: GraphQLInt
        },

        image: {
            name: 'image',
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