// App Imports
import {MESSAGE_SHOW, MESSAGE_HIDE} from './actions'

// Initial State
export const commonInitialState = {
  message: {
    text: [],
    open: false
  }
}

// State
export default (state = commonInitialState, action) => {
  switch (action.type) {
    case MESSAGE_SHOW:
      return {
        ...state,
        message: {
          text: action.message,
          open: true
        }
      }

    case MESSAGE_HIDE:
      return {
        ...state,
        message: {
          text: [],
          open: false
        }
      }

    default:
      return state
  }
}