// Imports
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import userRoutes from '../../setup/routes/user'

// Component
const AuthCheck = (props) => (
    props.user.isAuthenticated ? <Redirect to={ userRoutes.subscriptions.path } /> : ''
)

// Component Properties
AuthCheck.propTypes = {
    user: PropTypes.object.isRequired
}

// Component State
function authCheckState(state) {
    return {
        user: state.user
    }
}

export default connect(authCheckState, {})(AuthCheck)
