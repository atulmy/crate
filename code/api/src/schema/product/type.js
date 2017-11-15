// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Product type
const ProductType = new GraphQLObjectType({
    name: 'product',
    description: '...',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        product: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

export default ProductType