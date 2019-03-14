// Imports
import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { query } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const PRODUCTS_GET_LIST_REQUEST = 'PRODUCTS/GET_LIST_REQUEST'
export const PRODUCTS_GET_LIST_RESPONSE = 'PRODUCTS/GET_LIST_RESPONSE'
export const PRODUCTS_GET_LIST_FAILURE = 'PRODUCTS/GET_LIST_FAILURE'
export const PRODUCTS_GET_LIST_RESET = 'PRODUCTS/GET_LIST_RESET'
export const PRODUCTS_PRE_GET = 'PRODUCTS/PRE_GET'
export const PRODUCTS_GET_REQUEST = 'PRODUCTS/GET_REQUEST'
export const PRODUCTS_GET_RESPONSE = 'PRODUCTS/GET_RESPONSE'
export const PRODUCTS_GET_FAILURE = 'PRODUCTS/GET_FAILURE'
export const PRODUCTS_GET_RELATED_LIST_REQUEST = 'PRODUCTS/GET_RELATED_LIST_REQUEST'
export const PRODUCTS_GET_RELATED_LIST_RESPONSE = 'PRODUCTS/GET_RELATED_LIST_RESPONSE'
export const PRODUCTS_GET_RELATED_LIST_FAILURE = 'PRODUCTS/GET_RELATED_LIST_FAILURE'

// Actions

// Get list of products
export function getList(isLoading = true) {
  return async dispatch => {
    const CACHE_KEY = 'products'

    // Use AsyncStorage to load data (avoid showing refresh, but still make API call)
    try {
      const products = JSON.parse(await AsyncStorage.getItem(CACHE_KEY))

      if(products && products.length > 0) {
        dispatch({
          type: PRODUCTS_GET_LIST_RESPONSE,
          error: null,
          isLoading: false,
          list: products
        })
      } else {
        dispatch({
          type: PRODUCTS_GET_LIST_REQUEST,
          error: null,
          isLoading
        })
      }
    } catch(e) {
      dispatch({
        type: PRODUCTS_GET_LIST_REQUEST,
        error: null,
        isLoading
      })
    }

    return axios.post(routeApi, query({
      operation: 'products',
      fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt', 'updatedAt']
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: PRODUCTS_GET_LIST_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.products
          })

          AsyncStorage.setItem(CACHE_KEY, JSON.stringify(response.data.data.products))
        } else {
          dispatch({
            type: PRODUCTS_GET_LIST_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
        }
      })
      .catch(error => {
        dispatch({
          type: PRODUCTS_GET_LIST_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single product
export function get(slug, isLoading = true) {
  return async dispatch => {
    const CACHE_KEY = `product-${ slug }`

    // Use AsyncStorage to load data (avoid showing refresh, but still make API call)
    try {
      const product = JSON.parse(await AsyncStorage.getItem(CACHE_KEY))

      if(product) {
        dispatch({
          type: PRODUCTS_GET_RESPONSE,
          error: null,
          isLoading: false,
          item: product
        })
      } else {
        dispatch({
          type: PRODUCTS_GET_REQUEST,
          isLoading
        })
      }
    } catch(e) {
      dispatch({
        type: PRODUCTS_GET_REQUEST,
        isLoading
      })
    }

    // API call
    return axios.post(routeApi, query({
      operation: 'product',
      variables: { slug },
      fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt']
    }))
      .then(response => {
        if (response.status === 200) {
          if (response.data.errors && response.data.errors.length > 0) {
            dispatch({
              type: PRODUCTS_GET_FAILURE,
              error: response.data.errors[0].message,
              isLoading: false
            })
          } else {
            dispatch({
              type: PRODUCTS_GET_RESPONSE,
              error: null,
              isLoading: false,
              item: response.data.data.product
            })

            AsyncStorage.setItem(CACHE_KEY, JSON.stringify(response.data.data.product))
          }
        } else {
          dispatch({
            type: PRODUCTS_GET_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
        }
      })
      .catch(error => {
        dispatch({
          type: PRODUCTS_GET_FAILURE,
          error: error,
          isLoading: false
        })
      })
  }
}

// Set product details temporarily before fetching through API
export function preGet(product) {
  return dispatch => {
    dispatch({
      type: PRODUCTS_PRE_GET,
      item: product
    })
  }
}

// Get list of products related to a product
export function getRelatedList(productId, isLoading = true) {
  return (dispatch, getState) => {
    let state = getState()

    if (state.productsRelated.list.length === 0 || state.productId !== productId) {
      dispatch({
        type: PRODUCTS_GET_RELATED_LIST_REQUEST,
        error: null,
        isLoading
      })

      return axios.post(routeApi, query({
        operation: 'productsRelated',
        variables: { productId },
        fields: ['id', 'name', 'slug', 'description', 'image']
      }))
        .then(response => {
          if (response.status === 200) {
            dispatch({
              type: PRODUCTS_GET_RELATED_LIST_RESPONSE,
              error: null,
              isLoading: false,
              list: response.data.data.productsRelated,
              productId
            })
          } else {
            dispatch({
              type: PRODUCTS_GET_RELATED_LIST_FAILURE,
              error: 'Some error occurred. Please try again.',
              isLoading: false
            })
          }
        })
        .catch(error => {
          dispatch({
            type: PRODUCTS_GET_RELATED_LIST_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
        })
    }
  }
}
