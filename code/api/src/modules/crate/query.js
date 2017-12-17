// Imports
import {GraphQLInt, GraphQLList} from 'graphql'

// App Imports
import CrateType from './types'
import {getAll, getById} from './resolvers'

// Crates All
export const crates = {
  type: new GraphQLList(CrateType),
  resolve: getAll
}

// Crate By ID
export const crateById = {
  type: CrateType,
  args: {
    crateId: {type: GraphQLInt}
  },
  resolve: getById
}
