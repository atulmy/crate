// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Subscription type
const SubscriptionType = new GraphQLObjectType({
    name: 'subscription',
    description: 'Subscription Type',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

export default SubscriptionType