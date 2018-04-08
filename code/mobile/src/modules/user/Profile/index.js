// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'

// UI Imports
import Button from '../../../ui/button/Button'
import InputText from '../../../ui/input/Text'
import styles from './styles'

// App Imports
import config from '../../../setup/config/params'
import { logout } from '../../user/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'

// Component
class Profile extends PureComponent {

  onLogout = () => {
    this.props.logout()

    this.props.messageShow('Signed out successfully.')

    setTimeout(() => {
      this.props.messageHide()
    }, config.message.error.timers.short)
  }

  render() {
    return (
      <View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainerLeft} />

          <View style={styles.buttonContainerRight}>
            <Button
              title={'Logout'}
              iconLeft={'exit-to-app'}
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
