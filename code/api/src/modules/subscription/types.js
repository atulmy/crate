// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// Subscription type
const SubscriptionType = new GraphQLObjectType({
  name: 'subscription',
  description: 'Subscription Type',

  fields: () => ({
    id: {type: GraphQLInt},
    userId: {type: GraphQLInt},
    crateId: {type: GraphQLInt},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
})

export default SubscriptionType