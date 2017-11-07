// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../ui/grid'
import { H1, H4 } from '../ui/typography'
import Button from '../ui/button'
import { white } from '../ui/common/colors'
import { textLevel1 } from '../ui/common/shadows'

// App Imports
import user from '../../setup/routes/user'
import { logout } from './api/actions'

// Component
const Profile = (props) => (
    <Grid>
        {/* SEO */}
        <Helmet>
            <title>Profile - Crate</title>
        </Helmet>

        <GridCell>
            <button onClick={ props.logout.bind(this) }>Logout</button>
        </GridCell>
    </Grid>
)

// Component Properties
Profile.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect(null, { logout })(Profile)
