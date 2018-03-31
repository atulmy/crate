// Imports
import { compose, combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// App Imports
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'
import * as product from '../modules/product/api/state'
import * as crate from '../modules/crate/api/state'

// Root Reducer
const rootReducer = combineReducers({
  common,
  user,
  ...product,
  ...crate
})

// Store
export const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(thunk),
  )
)
