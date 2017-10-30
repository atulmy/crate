// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import { routes } from '../setup/routes'
import Layout from './common/Layout'
import NotFound from './common/NotFound'

const App = (props) => (
    <Layout>
        <Switch>
            { Object.values(routes).map((route, index) => (
                <Route { ...route } key={ index }/>
            )) }

            <Route component={ NotFound } />
        </Switch>
    </Layout>
)

export default App