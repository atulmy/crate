// Imports
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { isEmail, isLength } from 'validator'

// UI Imports
import Button from '../../../ui/button/Button'
import InputText from '../../../ui/input/Text'
import styles from './styles'

// App Imports
import config from '../../../setup/config'
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

  loading = isLoading => {
    this.setState({
      isLoading
    })
  }

  onSubmitRegister = async () => {
    const { dispatch } = this.props

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    // Validate
    let error = false
    let errorMessage = 'Please try again.'

    if (!isLength(user.name, { min: 3 })) {
      errorMessage = 'Name needs to be atleast 3 characters long. Please try again.'

      error = true
    } else if (!isEmail(user.email)) {
      errorMessage = 'The email you provided is invalid. Please try again.'

      error = true
    } else if (!isLength(user.password, { min: 3 })) {
      errorMessage = 'Password needs to be atleast 3 characters long. Please try again.'

      error = true
    }

    if (error) {
      dispatch(messageShow(errorMessage))

      setTimeout(() => {
        dispatch(messageHide())
      }, config.message.error.timers.default)

      return false
    } else {
      const { onSuccessRegister } = this.props

      this.loading(true)

      dispatch(messageShow('Signing you up, please wait...'))

      try {
        const response = await dispatch(register(user))

        this.loading(false)

        if (response.data.errors && response.data.errors.length > 0) {
          dispatch(messageShow(response.data.errors[0].message))
        } else {
          dispatch(messageShow('Registered successfully. Please login.'))

          onSuccessRegister()
        }
      } catch (error) {
        this.loading(false)

        dispatch(messageShow('There was some error signing you up. Please try again.'))
      } finally {
        setTimeout(() => {
          dispatch(messageHide())
        }, config.message.error.timers.long)
      }
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
          onSubmitEditing={() => {
            this.inputEmail.focus()
          }}
        />
        <InputText
          inputRef={input => {
            this.inputEmail = input
          }}
          placeholder={'Email'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          value={email}
          onChangeText={email => this.setState({ email })}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.inputPassword.focus()
          }}
        />

        <InputText
          inputRef={input => {
            this.inputPassword = input
          }}
          placeholder={'Password'}
          secureTextEntry={true}
          returnKeyType={'go'}
          value={password}
          onChangeText={password => this.setState({ password })}
          onSubmitEditing={event => this.onSubmitRegister(event)}
        />

        <View style={styles.buttonContainer}>
          <Button
            title={'Submit'}
            iconLeft={'check'}
            onPress={this.onSubmitRegister}
            theme={'primary'}
            disabled={isLoading}
          />
        </View>
      </View>
    )
  }
}

export default connect(null)(Signup)
