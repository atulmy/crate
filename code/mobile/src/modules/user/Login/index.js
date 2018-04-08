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
import { login } from '../../user/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'

// Component
class Login extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,

      email: 'user@crate.com',
      password: '123456'
    }
  }

  loading = (isLoading) => {
    this.setState({
      isLoading
    })
  }

  onSubmitRegister = () => {
    const { login, messageShow, messageHide } = this.props
    
    const user = {
      email: this.state.email,
      password: this.state.password
    }

    if(user.email !== '' && user.password !== '') {
      this.loading(true)

      messageShow('Signing you in, please wait...')

      login(user)
        .then(() => {
          if (this.props.user.error && this.props.user.error.length > 0) {
            messageShow(this.props.user.error)
          } else {
            messageShow('Signed in successfully, Welcome back!')
          }
        })
        .catch(() => {
          messageShow(this.props.user.error)
        })
        .then(() => {
          this.loading(false)

          setTimeout(() => {
            messageHide()
          }, config.message.error.timers.long)
        })
    } else {
      messageShow('All the fields are required. Please try again.')

      setTimeout(() => {
        messageHide()
      }, config.message.error.timers.default)
    }
  }

  render() {
    const { isLoading, email, password } = this.state

    return (
      <View>
        <InputText
          placeholder={'Email'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          value={email}
          onChangeText={email => this.setState({ email })}
          blurOnSubmit={false}
          onSubmitEditing={() => { this.inputPassword.focus() }}
        />

        <InputText
          inputRef={(input) => { this.inputPassword = input }}
          placeholder={'Password'}
          secureTextEntry={true}
          returnKeyType={'go'}
          value={password}
          onChangeText={password => this.setState({ password })}
          onSubmitEditing={(event) => this.onSubmitRegister(event)}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainerLeft} />

          <View style={styles.buttonContainerRight}>
            <Button
              title={'Submit'}
              iconLeft={'check'}
              theme={'primary'}
              disabled={isLoading}
              onPress={this.onSubmitRegister}
            />
          </View>
        </View>
      </View>
    )
  }
}

// Component Properties
Login.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function loginState(state) {
  return {
    user: state.user
  }
}

export default connect(loginState, { login, messageShow, messageHide })(Login)
