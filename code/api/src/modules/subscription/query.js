// Imports
import {GraphQLInt, GraphQLList} from 'graphql'

// App Imports
import SubscriptionType from './types'
import {getAll, get} from './resolvers'

// Subscriptions All
export const subscriptions = {
  type: new GraphQLList(SubscriptionType),
  resolve: getAll
}

// Subscription By slug
export const subscription = {
  type: SubscriptionType,
  args: {
    id: {type: GraphQLInt}
  },
  resolve: get
}