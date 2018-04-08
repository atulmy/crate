// Imports
import axios from 'axios'
import { AsyncStorage } from 'react-native'

// App Imports
import { routeApi } from '../../../setup/Routes'
import { queryBuilder } from '../../../setup/helpers'

// Actions Types
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'AUTH/LOGIN_RESPONSE'
export const SET_USER = 'AUTH/SET_USER'
export const LOGOUT = 'AUTH/LOGOUT'

// Actions

// Register a user
export function register(userDetails) {
  return dispatch => {
    return axios.post(routeApi, queryBuilder({
      type: 'mutation',
      operation: 'userSignup',
      data: userDetails,
      fields: ['id', 'name', 'email']
    }))
  }
}

// Login a user using credentials
export function login(userCredentials, isLoading = true) {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      isLoading
    })

    return axios.post(routeApi, queryBuilder({
      type: 'query',
      operation: 'userLogin',
      data: userCredentials,
      fields: ['user {name, email, role}', 'token']
    }))
      .then(response => {
        let error = ''

        if (response.data.errors && response.data.errors.length > 0) {
          error = response.data.errors[0].message
        } else if (response.data.data.userLogin.token !== '') {
          const token = response.data.data.userLogin.token
          const user = response.data.data.userLogin.user

          dispatch(setUser(token, user))

          setUserLocally(token, user)
        }

        dispatch({
          type: LOGIN_RESPONSE,
          error
        })
      })
      .catch(error => {
        dispatch({
          type: LOGIN_RESPONSE,
          error: 'Please try again'
        })
      })
  }
}

// Log out user and remove token from local (AsyncStorage)
export function logout() {
  return dispatch => {
    unsetUserLocally()

    dispatch({
      type: LOGOUT
    })
  }
}

// Set a user after login or using local (AsyncStorage) token
export function setUser(token, user) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }

  return { type: SET_USER, user }
}

// Set user token and info locally (AsyncStorage)
export function setUserLocally(token, user) {
  // Set token
  AsyncStorage.setItem('token', token)
  AsyncStorage.setItem('user', JSON.stringify(user))
}

// Unset user token and info locally (AsyncStorage)
export function unsetUserLocally() {
  // Remove token
  AsyncStorage.removeItem('token')
  AsyncStorage.removeItem('user')
}
