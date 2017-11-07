// Imports
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import cookie from 'js-cookie'

// App Imports
import { store } from './setup/store'
import { setUser } from './components/user/api/actions'
import App from './components/App'

// User Authentication
const token = window.localStorage.getItem('token')
if(token && token !== 'undefined' && token !== '') {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if(user) {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('user', JSON.stringify(user))
        
        store.dispatch(setUser(token, user))

        // Set cookie for SSR
        cookie.set('token', { token, user }, { path: '/' })
    }
}

// Client App
const Client = () => (
    <Provider store={ store } key="provider">
        <Router>
            <App />
        </Router>
    </Provider>
)

// Mount client app
window.onload = () => {
    hydrate(
        <Client />,
        document.getElementById('app')
    )
}