// Imports
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

// App Imports
import { store } from './setup/store'
import App from './components/App'

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