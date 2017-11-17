// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { grey2 } from '../ui/common/colors'

// Component
const Loading = (props) => (
    <p style={ { color: grey2, textAlign: 'center', padding: '2em' } }>{ props.message ? props.message : 'loading...' }</p>
)

// Component Properties
Loading.propTypes = {
    message: PropTypes.string
}

export default Loading