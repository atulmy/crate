// Imports
import {GraphQLInt, GraphQLString, GraphQLList} from 'graphql'

// App Imports
import {UserType, UserLoginType, UserGenderType} from './types'
import {getAll, getById, login, getGenders} from './resolvers'
import {getTypes} from "../product/resolvers"
import {ProductTypesType} from "../product/types"

// All
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID
export const user = {
  type: UserType,
  args: {
    id: {type: GraphQLInt}
  },
  resolve: getById
}

// Auth
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
