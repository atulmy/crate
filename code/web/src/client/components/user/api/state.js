// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

// Initial State
export const userInitialState = {
    isAuthenticated: false,
    details: null,
    isLoading: false,
    error: null
}

// State
export default (state = userInitialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.user),
                details: action.user
            }

        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case LOGIN_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                details: null
            }

        default:
            return state
    }
}