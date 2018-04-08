// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Image, ScrollView } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'
import KeyboardVisible from '../../common/KeyboardVisible'
import PreLogin from './PreLogin'
import PostLogin from './PostLogin'

// Component
class Account extends PureComponent {
  render() {
    const { keyboardVisible, user: { isAuthenticated } } = this.props

    return (
      <View style={styles.container}>
        <Body>
          <ScrollView>
            { isAuthenticated ? <PostLogin /> : <PreLogin /> }
          </ScrollView>
        </Body>

        {/* Show bottom navigation when keyboard is not visible */}
        { !keyboardVisible && <NavigationBottom /> }
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
