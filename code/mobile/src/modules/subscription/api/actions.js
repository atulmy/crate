// Imports
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST = 'SUBSCRIPTIONS/GET_LIST_BY_USER_REQUEST'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE = 'SUBSCRIPTIONS/GET_LIST_BY_USER_RESPONSE'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE = 'SUBSCRIPTIONS/GET_LIST_BY_USER_FAILURE'

// Actions

// Get list of subscriptions by user
export function getListByUser(userEmail, isLoading = true) {
  return async dispatch => {
    const CACHE_KEY = `subscriptions-user-${ userEmail }`

    // Use AsyncStorage to load data (avoid showing refresh, but still make API call)
    try {
      const subscriptions = JSON.parse(await AsyncStorage.getItem(CACHE_KEY))

      if(subscriptions && subscriptions.length > 0) {
        dispatch({
          type: SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
          error: null,
          isLoading: false,
          list: subscriptions
        })
      } else {
        dispatch({
          type: SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST,
          error: null,
          isLoading
        })
      }
    } catch(e) {
      dispatch({
        type: SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST,
        error: null,
        isLoading
      })
    }

    // API call
    return axios.post(routeApi, query({
      operation: 'subscriptionsByUser',
      fields: ['id', 'user { name, email }', 'crate { id, name, description }', 'createdAt']
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.subscriptionsByUser
          })

          AsyncStorage.setItem(CACHE_KEY, JSON.stringify(response.data.data.subscriptionsByUser))
        } else {
          console.error(response)
        }
      })
      .catch(error => {
        dispatch({
          type: SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Create subscription
export function create(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'subscriptionCreate',
      variables,
      fields: ['id']
    }))
  }
}

// Remove subscription
export function remove(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'subscriptionRemove',
      variables,
      fields: ['id']
    }))
  }
}
