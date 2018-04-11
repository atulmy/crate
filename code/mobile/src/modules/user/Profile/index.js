// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

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
    this.props.logout()

    this.props.messageShow('Signed out successfully.')

    setTimeout(() => {
      this.props.messageHide()
    }, config.message.error.timers.short)
  }

  render() {
    const { details } = this.props.user
    const { name, email } = details

    return (
      <View style={styles.container}>
        <Text style={styles.name}>{ name }</Text>

        <Text style={styles.email}>{ email }</Text>

        <Button
          title={'Logout'}
          iconRight={'exit-to-app'}
          theme={'default'}
          onPress={this.onLogout}
        />
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
