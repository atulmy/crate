// Imports
import { GraphQLString, GraphQLList } from 'graphql'

// App Imports
import ProductType from '../type'
import { getAll, getBySlug } from '../resolvers'

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