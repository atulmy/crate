// Imports
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../ui/grid'
import { H3, H5 } from '../ui/typography'
import Button from '../ui/button'
import { white, grey } from '../ui/common/colors'

// App Imports
import home from '../../setup/routes/home'

// Component
const NotFound = (props) => (
    <div>
        {/* SEO */}
        <Helmet>
            <title>Lost? - Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={ { backgroundColor: grey } }>
            <GridCell style={ { padding: '2em', textAlign: 'center'} }>
                <H3 font="secondary">Feeling lost?</H3>
            </GridCell>
        </Grid>

        <Grid>
            <GridCell style={ { textAlign: 'center' } }>
                <p style={ { textAlign: 'center', marginTop: '2em', marginBottom: '2em' } }>
                    <img src="/images/crate-broken.png" alt="404" style={ { width: '10em' } } />
                </p>

                <H3 font="secondary">Page you are looking for does not exists or has removed. It's 404.</H3>

                <H5 style={ { marginTop: '2em' } }>What can you do?</H5>

                <H5 style={ { marginTop: '0.5em' } }>You can contact us for any help or go to <Link to={ home.home.path }>home page.</Link></H5>
            </GridCell>
        </Grid>
    </div>
)

export default NotFound