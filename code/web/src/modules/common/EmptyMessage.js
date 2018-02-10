// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { grey3 } from '../../ui/common/colors'

// Component
const EmptyMessage = (props) => (
  <p style={{ textAlign: 'center', color: grey3, flex: 1, padding: 10 }}>{props.message}</p>
)

// Component Properties
EmptyMessage.propTypes = {
  message: PropTypes.string
}

// Component Default Properties
EmptyMessage.defaultProps = {
  message: 'No data to show'
}

export default EmptyMessage