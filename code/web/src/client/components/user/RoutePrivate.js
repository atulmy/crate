// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// App Imports
import userRoutes from '../../setup/routes/user'

// Component
class RoutePrivate extends Component {
    render() {
        const { isAuthenticated } = this.props.user

        return ( isAuthenticated ? <Route { ...this.props } component={ this.props.component } /> : <Redirect to={ userRoutes.login.path } /> )
    }
}

RoutePrivate.propTypes = {
    user: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(RoutePrivate);
