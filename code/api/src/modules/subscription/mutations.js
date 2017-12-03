// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { create, remove } from './resolvers'

// Subscription create
export const subscriptionCreate = {
    type: SubscriptionType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        }
    },
    resolve: create
}

// Subscription remove
export const subscriptionRemove = {
    type: SubscriptionType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}