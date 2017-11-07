// App Imports
import {
    ACTION_TYPE_BLOGS_FETCH,
    ACTION_TYPE_BLOGS_FETCHING
} from './actions'

export default (state = { list: [], error: false, loading: false }, action = {}) => {
    switch (action.type) {

        case ACTION_TYPE_BLOGS_FETCHING:
            return Object.assign({}, state, {
                list: [],
                error: false,
                loading: true
            })

        case ACTION_TYPE_BLOGS_FETCH:
            return Object.assign({}, state, {
                list: action.blogs,
                error: action.error,
                loading: false
            })

        default:
            return state
    }
}