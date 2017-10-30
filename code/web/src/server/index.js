// Imports
import path from 'path'
import { Server } from 'http'
import Express from 'express'
import { flushToHTML } from 'styled-jsx/server'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from "react-helmet"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// App Imports
import { rootReducer } from '../client/setup/store'
import routes from '../client/setup/routes'
import App from '../client/components/App'
import index from './views/index'

// Create new server
const app = new Express()
const server = new Server(app)

// Static files folder
app.use(Express.static(path.join(__dirname, '../', 'static')))

// Store (new store for each request)
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

// Match any Route
app.get('*', (request, response) => {

    let status = 200

    const matches = Object.values(routes).reduce((matches, route) => {
        const match = matchPath(request.url, route.path, route)
        if (match && match.isExact) {
            matches.push({
                route,
                match,
                promise: route.component.fetchData ? route.component.fetchData({ store, params: match.params }) : Promise.resolve(null)
            })
        }
        return matches
    }, [])

    // No such route, send 404 status
    if (matches.length === 0) {
        status = 404
    }

    // Any AJAX calls inside components
    const promises = matches.map((match) =>  {
        return match.promise
    })

    // Resolve the AJAX calls and render
    Promise.all(promises).then((...data) => {

        const initialState = store.getState()
        const context = {}

        const appHtml = renderToString(
            <Provider store={ store } key="provider">
                <StaticRouter context={ context } location={ request.url }>
                    <App />
                </StaticRouter>
            </Provider>
        )

        if (context.url) {
            response.redirect(context.url)
        } else {
            // Get Meta header tags
            const helmet = Helmet.renderStatic()

            // Ger Styles
            const styles = flushToHTML()

            let html = index(helmet, appHtml, styles, initialState)

            // Reset the state on server
            store.dispatch({
                type: 'RESET'
            })

            // Finally send generated HTML with initial data to the client
            return response.status(status).send(html)
        }
    }, (error) => {
        console.error(response, error)
    })
})

// Start Server
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'
server.listen(port, (error) => {
    if(error) {
        return console.error(error)
    } else {
        return console.info(`Server running on http://localhost:${port} [${env}]`)
    }
})