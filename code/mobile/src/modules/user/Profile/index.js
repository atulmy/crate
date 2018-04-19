// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, AsyncStorage } from 'react-native'

// UI Imports
import Button from '../../../ui/button/Button'
import styles from './styles'

// App Imports
import config from '../../../setup/config'
import { logout } from '../../user/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'

// Component
class Profile extends PureComponent {

  onLogout = () => {
    const { logout, messageShow, messageHide } = this.props

    logout()

    messageShow('Signed out successfully.')

    setTimeout(() => {
      messageHide()
    }, config.message.error.timers.short)
  }

  clearDataCache = () => {
    const { messageShow, messageHide } = this.props

    // Get all keys
    AsyncStorage.getAllKeys()
      .then(keys => {
        // Clear keys except for user authentication keys
        const keysToClear = keys.filter(key => key !== 'token' && key !== 'user')

        if(keysToClear && keysToClear.length > 0) {
          AsyncStorage.multiRemove(keysToClear)
            .then(() => {
              messageShow('Data cache cleared successfully.')
            })
            .catch(() => {
              messageShow('There was some error clearing the cache. Please try again.')
            })
            .then(() => {
              setTimeout(() => {
                messageHide()
              }, config.message.error.timers.default)
            })
        } else {
          messageShow('No cached data to clear.')
        }
      })
      .catch(() => {
        messageShow('There was some error clearing the cache. Please try again.')
      })
      .then(() => {
        setTimeout(() => {
          messageHide()
        }, config.message.error.timers.default)
      })
  }

  render() {
    const { details } = this.props.user
    const { name, email } = details

    return (
      <View style={styles.container}>
        <Text style={styles.name}>{ name }</Text>

        <Text style={styles.email}>{ email }</Text>

        <View style={{ flexDirection: 'row' }}>
          <View>
            <Button
              title={'Clear Data Cache'}
              iconLeft={'cached'}
              theme={'default'}
              onPress={this.clearDataCache}
            />
          </View>

          <View>
            <Button
              title={'Logout'}
              iconRight={'exit-to-app'}
              theme={'primary'}
              onPress={this.onLogout}
            />
          </View>
        </View>
      </View>
    )
  }
}

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout, messageShow, messageHide })(Profile)
