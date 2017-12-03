// Imports
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/configs'
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
                    <img src={ `${ APP_URL }/images/crate-broken.png` } alt="404" style={ { width: '10em' } } />
                </p>

                <H3 font="secondary">Page you are looking for does not exists or has removed. It's 404.</H3>

                <p style={ { marginTop: '2em' } }>What can you do?</p>

                <p style={ { marginTop: '0.5em' } }>You can go to <Link to={ home.home.path }>home page.</Link> or contact us for any help.</p>
            </GridCell>
        </Grid>
    </div>
)

export default NotFound