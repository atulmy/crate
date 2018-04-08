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
import { register } from '../../user/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'

// Component
class Signup extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,

      name: '',
      email: '',
      password: ''
    }
  }

  loading = (isLoading) => {
    this.setState({
      isLoading
    })
  }

  onSubmitRegister = () => {
    const { register, messageShow, messageHide } = this.props
    
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    if(user.name !== '' && user.email !== '' && user.password !== '') {
      this.loading(true)

      messageShow('Signing you up, please wait...')

      register(user)
        .then(response => {
          if (response.data.errors && response.data.errors.length > 0) {
            messageShow(response.data.errors[0].message)
          } else {
            messageShow('Signed up successfully.')

            this.props.onSuccessRegister()
          }
        })
        .catch(() => {
          messageShow('There was some error signing you up. Please try again.')
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
    const { isLoading, name, email, password } = this.state

    return (
      <View>
        <InputText
          placeholder={'Name'}
          returnKeyType={'next'}
          value={name}
          onChangeText={name => this.setState({ name })}
          autoFocus={true}
          blurOnSubmit={false}
          onSubmitEditing={() => { this.inputEmail.focus() }}
        />

        <InputText
          inputRef={(input) => { this.inputEmail = input }}
          placeholder={'Email'}
          keyboardType={'email-address'}
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
              onPress={this.onSubmitRegister}
              theme={'primary'}
              disabled={isLoading}
            />
          </View>
        </View>
      </View>
    )
  }
}

// Component Properties
Signup.propTypes = {
  onSuccessRegister: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default connect(null, { register, messageShow, messageHide })(Signup)
