// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import Icon from '../../ui/icon/Icon'
import { white, black } from '../../ui/common/colors'
import { level2 } from '../../ui/common/shadows'

// App Imports
import { renderIf } from '../../setup/helpers'
import { messageHide } from './api/actions'
import Header from './header/Header'

class Layout extends Component {
  render () {
    const { children } = this.props

    return (
      <div>
        {/* Header */}
        <Header />

        {/* Page Content */}
        <section style={{ marginTop: '5em' }}>
          {children}
        </section>

        {/* Messages */}
        {renderIf(this.props.common.message.open, () => (
          <div style={{
            boxShadow: level2,
            position: 'fixed',
            right: '2em',
            bottom: '2em',
            backgroundColor: black,
            color: white,
            borderRadius: '3em',
            maxWidth: '30em'
          }}>
            <span style={{
              float: 'left',
              padding: '1em 0em 1em 2em',
              marginRight: '4em'
            }}>{this.props.common.message.text}</span>

            <Icon
              style={{ position: 'absolute', padding: '1em', cursor: 'pointer', right: '0.5em', top: 0 }}
              onClick={this.props.messageHide}
            >
              close
            </Icon>
          </div>
        ))}
      </div>
    )
  }
}

// Component Properties
Layout.propTypes = {
  common: PropTypes.object.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function commonState (state) {
  return {
    common: state.common
  }
}

export default connect(commonState, { messageHide })(Layout)
