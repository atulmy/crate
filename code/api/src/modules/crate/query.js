// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import CrateType from './type'
import { getAll, get } from './resolvers'

// Crates All
export const crates = {
    type: new GraphQLList(CrateType),
    resolve: getAll
}

// Crate By slug
export const crate = {
    type: CrateType,
    args: {
        id: { type: GraphQLInt }
    },
    resolve: get
}