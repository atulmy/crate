// Imports
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import { routes } from '../../setup/routes'

// Component
class AuthCheck extends Component {
    render() {
        const { isAuthenticated } = this.props.user;

        return (
            <div>
                { isAuthenticated ? <Redirect to={ routes.home.path } /> : '' }
            </div>
        )
    }
}

// Component Properties
AuthCheck.propTypes = {
    user: PropTypes.object.isRequired
}

// Component State
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(AuthCheck)
