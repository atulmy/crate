// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import ProductType from '../type'
import { getAll, getById } from '../resolvers'

// Products All
export const products = {
    type: new GraphQLList(ProductType),
    resolve: getAll
}

// Product By ID
export const product = {
    type: ProductType,
    args: {
        id: { type: GraphQLInt }
    },
    resolve: getById
}