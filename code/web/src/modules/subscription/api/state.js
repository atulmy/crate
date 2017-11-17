// Imports

// App Imports
import {
    SUBSCRIPTIONS_GET_LIST_REQUEST,
    SUBSCRIPTIONS_GET_LIST_RESPONSE,
    SUBSCRIPTIONS_GET_LIST_FAILURE,
    SUBSCRIPTIONS_GET_REQUEST,
    SUBSCRIPTIONS_GET_RESPONSE,
    SUBSCRIPTIONS_GET_FAILURE,
} from './actions'

// Subscriptions list

// Initial State
const subscriptionsInitialState = {
    isLoading: false,
    error: null,
    list: []
}

// State
export const subscriptions = (state = subscriptionsInitialState, action) => {
    switch (action.type) {
        case SUBSCRIPTIONS_GET_LIST_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
                error: null
            }

        case SUBSCRIPTIONS_GET_LIST_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                list: action.list
            }

        case SUBSCRIPTIONS_GET_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}

// Single subscription

// Initial State
const subscriptionInitialState = {
    isLoading: false,
    error: null,
    item: {}
}

// State
export const subscription = (state = subscriptionInitialState, action) => {
    switch (action.type) {
        case SUBSCRIPTIONS_GET_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
                error: null
            }

        case SUBSCRIPTIONS_GET_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                item: action.item
            }

        case SUBSCRIPTIONS_GET_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}