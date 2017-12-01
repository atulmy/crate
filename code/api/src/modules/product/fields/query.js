// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import ProductType from '../type'
import { getAll, getBySlug, getRelated } from '../resolvers'

// Products All
export const products = {
    type: new GraphQLList(ProductType),
    resolve: getAll
}

// Product By slug
export const product = {
    type: ProductType,
    args: {
        slug: { type: GraphQLString }
    },
    resolve: getBySlug
}

// Products Related
export const productsRelated = {
    type: new GraphQLList(ProductType),
    args: {
        productId: { type: GraphQLInt }
    },
    resolve: getRelated
}
