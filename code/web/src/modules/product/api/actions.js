// Imports
import axios from 'axios'

// App Imports
import { routeApi } from '../../../setup/routes'
import { queryBuilder } from '../../../setup/helpers'

// Actions Types
export const PRODUCTS_GET_LIST_REQUEST = 'PRODUCTS/GET_LIST_REQUEST'
export const PRODUCTS_GET_LIST_RESPONSE = 'PRODUCTS/GET_LIST_RESPONSE'
export const PRODUCTS_GET_LIST_FAILURE = 'PRODUCTS/GET_LIST_FAILURE'
export const PRODUCTS_GET_LIST_RESET = 'PRODUCTS/GET_LIST_RESET'
export const PRODUCTS_GET_REQUEST = 'PRODUCTS/GET_REQUEST'
export const PRODUCTS_GET_RESPONSE = 'PRODUCTS/GET_RESPONSE'
export const PRODUCTS_GET_FAILURE = 'PRODUCTS/GET_FAILURE'
export const PRODUCTS_GET_RELATED_LIST_REQUEST = 'PRODUCTS/GET_RELATED_LIST_REQUEST'
export const PRODUCTS_GET_RELATED_LIST_RESPONSE = 'PRODUCTS/GET_RELATED_LIST_RESPONSE'
export const PRODUCTS_GET_RELATED_LIST_FAILURE = 'PRODUCTS/GET_RELATED_LIST_FAILURE'

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

            return axios.post(routeApi, queryBuilder({ type: 'query', operation: 'products', fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt', 'updatedAt'] }))
                .then(response => {
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
                .catch(error => {
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
                .then(response => {
                    if(response.data.errors && response.data.errors.length > 0) {
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
}

// Get list of products related to a product
export function getRelatedList(productId, isLoading = true) {
    return (dispatch, getState) => {
        let state = getState()

        if(state.productsRelated.list.length === 0 || state.productId !== productId) {
            dispatch({
                type: PRODUCTS_GET_RELATED_LIST_REQUEST,
                error: null,
                isLoading
            })

            return axios.post(routeApi, queryBuilder({ type: 'query', operation: 'productsRelated', data: { productId }, fields: ['id', 'name', 'slug', 'description', 'image'] }))
                .then(response => {
                    if(response.status === 200) {
                        dispatch({
                            type: PRODUCTS_GET_RELATED_LIST_RESPONSE,
                            error: null,
                            isLoading: false,
                            list: response.data.data.productsRelated,
                            productId
                        })
                    } else {
                        console.error(response)
                    }
                })
                .catch(error => {
                    dispatch({
                        type: PRODUCTS_GET_RELATED_LIST_FAILURE,
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

// Get product types
export function getTypes() {
    return dispatch => {
        return axios.post(routeApi, queryBuilder({ type: 'query', operation: 'productTypes', fields: ['id', 'name'] }))
    }
}
