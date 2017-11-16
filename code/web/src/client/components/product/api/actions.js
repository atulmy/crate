// Imports
import axios from 'axios'

// App Imports
import { routeApi } from '../../../setup/routes'
import { queryBuilder } from '../../../setup/helpers'

// Actions Types
export const PRODUCTS_GET_LIST_REQUEST = 'PRODUCTS/GET_LIST_REQUEST'
export const PRODUCTS_GET_LIST_RESPONSE = 'PRODUCTS/GET_LIST_RESPONSE'
export const PRODUCTS_GET_LIST_FAILURE = 'PRODUCTS/GET_LIST_FAILURE'
export const PRODUCTS_GET_REQUEST = 'PRODUCTS/GET_REQUEST'
export const PRODUCTS_GET_RESPONSE = 'PRODUCTS/GET_RESPONSE'
export const PRODUCTS_GET_FAILURE = 'PRODUCTS/GET_FAILURE'

// Actions

// Get list of products
export function getList(isLoading = true) {
    return (dispatch, getState) => {
        let state = getState()

        if(state.products.list.length === 0) {
            dispatch({
                type: PRODUCTS_GET_LIST_REQUEST,
                error: null,
                isLoading
            })

            return axios.post(routeApi, queryBuilder({ type: 'query', operation: 'products', fields: ['id', 'name', 'slug', 'description', 'image'] }))
                .then((response) => {
                    if(response.status === 200) {
                        dispatch({
                            type: PRODUCTS_GET_LIST_RESPONSE,
                            error: null,
                            isLoading: false,
                            list: response.data.data.products
                        })
                    } else {
                        console.error(response)
                    }
                })
                .catch(function (error) {
                    dispatch({
                        type: PRODUCTS_GET_LIST_FAILURE,
                        error: error,
                        isLoading: false
                    })
                })
        }
    }
}

// Get single product
export function get(slug, isLoading = true) {
    return (dispatch, getState) => {
        let state = getState()

        if(!state.product.item || state.product.item.slug !== slug) {
            dispatch({
                type: PRODUCTS_GET_REQUEST,
                isLoading
            })

            return axios.post(routeApi, queryBuilder({
                type: 'query',
                operation: 'product',
                data: {slug},
                fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt']
            }))
                .then((response) => {
                    dispatch({
                        type: PRODUCTS_GET_RESPONSE,
                        error: null,
                        isLoading: false,
                        item: response.data.data.product
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: PRODUCTS_GET_FAILURE,
                        error: error,
                        isLoading: false
                    })
                })
        }
    }
}

// Create product
export function create(data) {
    return dispatch => {
        return axios.post(routeApi, queryBuilder({ type: 'mutation', operation: 'productCreate', data, fields: ['id'] }))
    }
}

// Remove product
export function remove(data) {
    return dispatch => {
        return axios.post(routeApi, queryBuilder({ type: 'mutation', operation: 'productRemove', data, fields: ['id'] }))
    }
}
