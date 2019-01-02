// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// UI Imports
import styles from './styles'

// App Imports
import Body from '../../common/Body'
import KeyboardVisible from '../../common/KeyboardVisible'
import PreLogin from './PreLogin'
import PostLogin from './PostLogin'

// Component
class Account extends PureComponent {
  render() {
    const { user: { isAuthenticated } } = this.props

    return (
      <View style={styles.container}>
        <Body>
          <KeyboardAwareScrollView>
            { isAuthenticated ? <PostLogin /> : <PreLogin /> }
          </KeyboardAwareScrollView>
        </Body>
      </View>
    )
  }
}

// Component Properties
Account.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function accountState(state) {
  return {
    user: state.user
  }
}

export default connect(accountState, {})(KeyboardVisible(Account))
