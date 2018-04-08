// Imports
import axios from 'axios'

// App Imports
import { routeApi } from '../../../setup/Routes'
import { queryBuilder } from '../../../setup/helpers'

// Actions Types
export const SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST = 'SUBSCRIPTIONS/GET_LIST_BY_USER_REQUEST'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE = 'SUBSCRIPTIONS/GET_LIST_BY_USER_RESPONSE'
export const SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE = 'SUBSCRIPTIONS/GET_LIST_BY_USER_FAILURE'

// Actions

// Get list of subscriptions by user
export function getListByUser(isLoading = true) {
  return dispatch => {
    dispatch({
      type: SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST,
      error: null,
      isLoading
    })

    return axios.post(routeApi, queryBuilder({
      type: 'query',
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
export function create(data) {
  console.log(data)
  return dispatch => {
    return axios.post(routeApi, queryBuilder({
      type: 'mutation',
      operation: 'subscriptionCreate',
      data,
      fields: ['id']
    }))
  }
}

// Remove subscription
export function remove(data) {
  return dispatch => {
    return axios.post(routeApi, queryBuilder({
      type: 'mutation',
      operation: 'subscriptionRemove',
      data,
      fields: ['id']
    }))
  }
}
