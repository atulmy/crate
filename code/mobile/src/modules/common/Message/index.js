// Imports
import React  from 'react'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import Toast from '../../../ui/toast/Toast'

// App Imports
import { messageHide } from '../api/actions'

// Component
const Message = (props) => (
  props.common.message.open && <Toast message={props.common.message.text} onPress={ props.messageHide } />
)

// Component Properties
Message.propTypes = {
  common: PropTypes.object,
  messageHide: PropTypes.func.isRequired
}

// Component State
function messageState(state) {
  return {
    common: state.common
  }
}

export default connect(messageState, { messageHide })(Message)
