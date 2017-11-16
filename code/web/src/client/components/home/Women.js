// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../ui/grid'
import { H2, H4 } from '../ui/typography'
import Button from '../ui/button'
import ImageTile from '../ui/image/Tile'
import { level1 } from '../ui/common/shadows'

// App Imports
import userRoutes from '../../setup/routes/user'

// Component
const Women = (props) => (
    <Grid alignCenter={ true } style={ { padding: '2em' } }>
        {/* SEO */}
        <Helmet>
            <title>Monthly supply of clothes and accessories for Women - Crate</title>
        </Helmet>

        {/* Left Content - Image Collage */}
        <GridCell>
            <Grid gutter={ true } alignCenter={ true }>
                <GridCell justifyCenter={ true }>
                    <ImageTile width={ 300 } height={ 530 } shadow={ level1 } image={ '/images/stock/women/1.jpg' } />
                </GridCell>

                <GridCell>
                    <Grid>
                        <GridCell justifyCenter={ true }>
                            <ImageTile width={ 170 } height={ 250 } shadow={ level1 } image={ '/images/stock/women/2.jpg' } />
                        </GridCell>
                    </Grid>

                    <Grid>
                        <GridCell justifyCenter={ true }>
                            <ImageTile width={ 170 } height={ 250 } shadow={ level1 } image={ '/images/stock/women/3.jpg' } style={ {  marginTop: '1.9em' } } />
                        </GridCell>
                    </Grid>
                </GridCell>
            </Grid>
        </GridCell>

        {/* Right Content */}
        <GridCell style={ { textAlign: 'center' } }>
            <H2 font="secondary">Monthly crates for Women</H2>

            <H4 style={ { marginTop: '0.5em' } }>Save time. Look great. The personal styling service customized to your fit, lifestyle & spending preferences.</H4>

            {/* Call to action */}
            {
                props.user.isAuthenticated
                    ?
                <Link to={ userRoutes.subscriptions.path }>
                    <Button theme="secondary" style={ { marginTop: '1em' } }>Get Subscription</Button>
                </Link>
                    :
                <Link to={ userRoutes.signup.path }>
                    <Button theme="secondary" style={ { marginTop: '1em' } }>Get Started</Button>
                </Link>
            }
        </GridCell>
    </Grid>
)

// Component Properties
Women.propTypes = {
    user: PropTypes.object.isRequired
}

// Component State
function womenState(state) {
    return {
        user: state.user
    }
}

export default connect(womenState, {})(Women)