// Imports
import { AsyncStorage } from 'react-native'
import axios from 'axios'
import queryBuilder from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const CRATES_GET_LIST_REQUEST = 'CRATES/GET_LIST_REQUEST'
export const CRATES_GET_LIST_RESPONSE = 'CRATES/GET_LIST_RESPONSE'
export const CRATES_GET_LIST_FAILURE = 'CRATES/GET_LIST_FAILURE'

// Actions

// Get list of crates
export function getList(orderBy = 'DESC', isLoading = true, forceRefresh = false) {
  return async dispatch => {
    const CACHE_KEY = 'crates'

    // Use AsyncStorage to load data (avoid showing refresh, but still make API call)
    try {
      const crates = JSON.parse(await AsyncStorage.getItem(CACHE_KEY))

      if(crates && crates.length > 0) {
        dispatch({
          type: CRATES_GET_LIST_RESPONSE,
          error: null,
          list: crates
        })
      } else {
        dispatch({
          type: CRATES_GET_LIST_REQUEST,
          error: null,
          isLoading
        })
      }
    } catch(e) {
      dispatch({
        type: CRATES_GET_LIST_REQUEST,
        error: null,
        isLoading
      })
    }

    // API call
    return axios.post(routeApi, queryBuilder({
      type: 'query',
      operation: 'crates',
      data: { orderBy },
      fields: ['id', 'name', 'description', 'createdAt', 'updatedAt']
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: CRATES_GET_LIST_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.crates
          })

          AsyncStorage.setItem(CACHE_KEY, JSON.stringify(response.data.data.crates))
        } else {
          console.error(response)
        }
      })
      .catch(error => {
        dispatch({
          type: CRATES_GET_LIST_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}
