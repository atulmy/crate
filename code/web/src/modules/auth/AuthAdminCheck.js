// Imports
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import home from '../../setup/routes/home'

// Component
const AuthAdminCheck = (props) => (
  props.user.isAuthenticated && props.user.details.role === 'ADMIN' ? '' : <Redirect to={home.home.path}/>
)

// Component Properties
AuthAdminCheck.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function authAdminCheckState(state) {
  return {
    user: state.user
  }
}

export default connect(authAdminCheckState, {})(AuthAdminCheck)
