// Imports
import axios from 'axios'

// App Imports
import { routeApi } from '../../../setup/routes'
import { queryBuilder } from '../../../setup/helpers'

// Actions Types
export const CRATES_GET_LIST_REQUEST = 'CRATES/GET_LIST_REQUEST'
export const CRATES_GET_LIST_RESPONSE = 'CRATES/GET_LIST_RESPONSE'
export const CRATES_GET_LIST_FAILURE = 'CRATES/GET_LIST_FAILURE'
export const CRATES_GET_REQUEST = 'CRATES/GET_REQUEST'
export const CRATES_GET_RESPONSE = 'CRATES/GET_RESPONSE'
export const CRATES_GET_FAILURE = 'CRATES/GET_FAILURE'

// Actions

// Get list of crates
export function getList(isLoading = true) {
    return (dispatch, getState) => {
        let state = getState()

        if(state.crates.list.length === 0) {
            dispatch({
                type: CRATES_GET_LIST_REQUEST,
                error: null,
                isLoading
            })

            return axios.post(routeApi, queryBuilder({ type: 'query', operation: 'crates', fields: ['id', 'name', 'description'] }))
                .then((response) => {
                    if(response.status === 200) {
                        dispatch({
                            type: CRATES_GET_LIST_RESPONSE,
                            error: null,
                            isLoading: false,
                            list: response.data.data.crates
                        })
                    } else {
                        console.error(response)
                    }
                })
                .catch(function (error) {
                    dispatch({
                        type: CRATES_GET_LIST_FAILURE,
                        error: error,
                        isLoading: false
                    })
                })
        }
    }
}

// Get single crate
export function get(slug, isLoading = true) {
    return (dispatch, getState) => {
        let state = getState()

        if(!state.crate.item || state.crate.item.slug !== slug) {
            dispatch({
                type: CRATES_GET_REQUEST,
                isLoading
            })

            return axios.post(routeApi, queryBuilder({
                type: 'query',
                operation: 'crate',
                data: {slug},
                fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt']
            }))
                .then((response) => {
                    dispatch({
                        type: CRATES_GET_RESPONSE,
                        error: null,
                        isLoading: false,
                        item: response.data.data.crate
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: CRATES_GET_FAILURE,
                        error: error,
                        isLoading: false
                    })
                })
        }
    }
}

// Create crate
export function create(data) {
    return dispatch => {
        return axios.post(routeApi, queryBuilder({ type: 'mutation', operation: 'crateCreate', data, fields: ['id'] }))
    }
}

// Remove crate
export function remove(data) {
    return dispatch => {
        return axios.post(routeApi, queryBuilder({ type: 'mutation', operation: 'crateRemove', data, fields: ['id'] }))
    }
}
