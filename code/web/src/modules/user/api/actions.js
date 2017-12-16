// Imports
import axios from 'axios'

// App Imports
import { routeApi } from '../../../setup/routes'
import { queryBuilder } from '../../../setup/helpers'
import cookie from 'js-cookie'

// Actions Types
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'AUTH/LOGIN_RESPONSE'
export const SET_USER = 'AUTH/SET_USER'
export const LOGOUT = 'AUTH/LOGOUT'

// Actions

// Set a user after login or using localStorage token
export function setUser(token, user) {
    if(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }

    return { type: SET_USER, user }
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
            fields: ['user {name, email}', 'token']
        }) )
            .then(response => {
                let error = ''

                if(response.data.errors && response.data.errors.length > 0) {
                    error = response.data.errors[0].message
                } else if(response.data.data.userLogin.token !== '') {
                    const token = response.data.data.userLogin.token
                    const user = response.data.data.userLogin.user

                    dispatch(setUser(token, user))

                    loginSetUserLocalStorageAndCookie(token, user)
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

// Set user token and info in localStorage and cookie
export function loginSetUserLocalStorageAndCookie(token, user) {
    // Update token
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('user', JSON.stringify(user))

    // Set cookie for SSR
    cookie.set('auth', { token, user }, { path: '/' })
}

// Register a user
export function register(userDetails) {
    return dispatch => {
        return axios.post(routeApi, queryBuilder({
            type: 'mutation',
            operation: 'userSignup',
            data: userDetails,
            fields: ['id', 'name', 'email']
        }) )
    }
}

// Log out user and remove token from localStorage
export function logout() {
    return dispatch => {
        logoutUnsetUserLocalStorageAndCookie()

        dispatch({
            type: LOGOUT
        })
    }
}

// Unset user token and info in localStorage and cookie
export function logoutUnsetUserLocalStorageAndCookie(token, user) {
    // Update token
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')

    // Set cookie for SSR
    cookie.remove('auth')
}

// Get user gender
export function getGenders() {
    return dispatch => {
        return axios.post(routeApi, queryBuilder({
            type: 'query',
            operation: 'userGenders',
            fields: ['id', 'name']
        }) )
    }
}
