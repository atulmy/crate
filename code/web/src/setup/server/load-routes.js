// Imports
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Helmet } from "react-helmet"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { flushToHTML } from 'styled-jsx/server'

// App Imports
import { APP_URL, NODE_ENV } from '../config/env'
import { rootReducer } from '../store'
import { routes } from '../routes'
import { setUser } from '../../modules/user/api/actions'
import App from '../client/App'
import view from '../server/view'

export default function (app) {
  console.info('SETUP - Load routes..')

  // Store (new store for each request)
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )

  // Match any Route
  app.get('*', (request, response) => {

    // Check for auth
    if (request.cookies.auth) {
      const auth = JSON.parse(request.cookies.auth)

      if (auth && auth.token !== '' && auth.user) {
        store.dispatch(setUser(auth.token, auth.user))
      }
    }

    // HTTP status code
    let status = 200

    const matches = Object.values(routes).reduce((matches, route) => {
      const match = matchPath(request.url, typeof route.path === 'function' ? route.path() : route.path, route)

      if (match && match.isExact) {
        matches.push({
          route,
          match,
          promise: route.component.fetchData ? route.component.fetchData({
            store,
            params: match.params
          }) : Promise.resolve(null)
        })
      }
      return matches
    }, [])

    // No such route, send 404 status
    if (matches.length === 0) {
      status = 404
    }

    // Any AJAX calls inside components
    const promises = matches.map((match) => {
      return match.promise
    })

    // Resolve the AJAX calls and render
    Promise.all(promises)
      .then((...data) => {
        const initialState = store.getState()
        const context = {}

        const appHtml = renderToString(
          <Provider store={store} key="provider">
            <StaticRouter context={context} location={request.url}>
              <App/>
            </StaticRouter>
          </Provider>
        )

        if (context.url) {
          response.redirect(context.url)
        } else {
          // Get Meta header tags
          const helmet = Helmet.renderStatic()

          const styles = flushToHTML()

          const htmlStatic = view(APP_URL, NODE_ENV)


          const html = view(APP_URL, NODE_ENV, helmet, appHtml, styles, initialState)

          // Reset the state on server
          store.dispatch({
            type: 'RESET'
          })

          // Finally send generated HTML with initial data to the client
          return response.status(status).send(html)
        }
      })
      .catch(error => {
        console.error(error)
      })
  })

}
