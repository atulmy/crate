// Imports
import axios from 'axios'

// App Imports
import { routeApi } from '../../../setup/routes'
import { queryBuilder } from '../../../setup/helpers'

// Actions Types
export const SUBSCRIPTIONS_GET_LIST_REQUEST = 'SUBSCRIPTIONS/GET_LIST_REQUEST'
export const SUBSCRIPTIONS_GET_LIST_RESPONSE = 'SUBSCRIPTIONS/GET_LIST_RESPONSE'
export const SUBSCRIPTIONS_GET_LIST_FAILURE = 'SUBSCRIPTIONS/GET_LIST_FAILURE'
export const SUBSCRIPTIONS_GET_REQUEST = 'SUBSCRIPTIONS/GET_REQUEST'
export const SUBSCRIPTIONS_GET_RESPONSE = 'SUBSCRIPTIONS/GET_RESPONSE'
export const SUBSCRIPTIONS_GET_FAILURE = 'SUBSCRIPTIONS/GET_FAILURE'

// Actions

// Get list of subscriptions
export function getList(isLoading = true) {
    return (dispatch, getState) => {
        let state = getState()

        if(state.subscriptions.list.length === 0) {
            dispatch({
                type: SUBSCRIPTIONS_GET_LIST_REQUEST,
                error: null,
                isLoading
            })

            return axios.post(routeApi, queryBuilder({ type: 'query', operation: 'subscriptions', fields: ['id', 'name', 'slug', 'description', 'image'] }))
                .then((response) => {
                    if(response.status === 200) {
                        dispatch({
                            type: SUBSCRIPTIONS_GET_LIST_RESPONSE,
                            error: null,
                            isLoading: false,
                            list: response.data.data.subscriptions
                        })
                    } else {
                        console.error(response)
                    }
                })
                .catch(function (error) {
                    dispatch({
                        type: SUBSCRIPTIONS_GET_LIST_FAILURE,
                        error: error,
                        isLoading: false
                    })
                })
        }
    }
}

// Get single subscription
export function get(slug, isLoading = true) {
    return (dispatch, getState) => {
        let state = getState()

        if(!state.subscription.item || state.subscription.item.slug !== slug) {
            dispatch({
                type: SUBSCRIPTIONS_GET_REQUEST,
                isLoading
            })

            return axios.post(routeApi, queryBuilder({
                type: 'query',
                operation: 'subscription',
                data: {slug},
                fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt']
            }))
                .then((response) => {
                    dispatch({
                        type: SUBSCRIPTIONS_GET_RESPONSE,
                        error: null,
                        isLoading: false,
                        item: response.data.data.subscription
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: SUBSCRIPTIONS_GET_FAILURE,
                        error: error,
                        isLoading: false
                    })
                })
        }
    }
}

// Create subscription
export function create(data) {
    return dispatch => {
        return axios.post(routeApi, queryBuilder({ type: 'mutation', operation: 'subscriptionCreate', data, fields: ['id'] }))
    }
}

// Remove subscription
export function remove(data) {
    return dispatch => {
        return axios.post(routeApi, queryBuilder({ type: 'mutation', operation: 'subscriptionRemove', data, fields: ['id'] }))
    }
}
