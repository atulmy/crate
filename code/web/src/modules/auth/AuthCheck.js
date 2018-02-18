// Imports
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import crate from '../../setup/routes/crate'

// Component
const AuthCheck = (props) => (
  props.user.isAuthenticated ? <Redirect to={crate.list.path} /> : ''
)

// Component Properties
AuthCheck.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function authCheckState (state) {
  return {
    user: state.user
  }
}

export default connect(authCheckState, {})(AuthCheck)
