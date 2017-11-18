// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import SubscriptionType from '../type'
import { getAll, get } from '../resolvers'

// Subscriptions All
export const crates = {
    type: new GraphQLList(SubscriptionType),
    resolve: getAll
}

// Subscription By slug
export const crate = {
    type: SubscriptionType,
    args: {
        id: { type: GraphQLInt }
    },
    resolve: get
}