// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import ThoughtType from '../type'
import { getAll, getById } from '../resolvers'

// Thoughts All
export const thoughts = {
    type: new GraphQLList(ThoughtType),
    resolve: getAll
}

// Thought By ID
export const thought = {
    type: ThoughtType,
    args: {
        id: { type: GraphQLInt }
    },
    resolve: getById
}