// Imports
import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'

// Component
export default class Account extends Component {

  constructor(props) {
    super(props)

    this.state = {
      keyboardVisible: false
    }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      keyboardVisible: true
    })
  }

  _keyboardDidHide = () => {
    this.setState({
      keyboardVisible: false
    })
  }

  render() {
    const { keyboardVisible } = this.state

    return (
      <View style={styles.container}>
        <Body>
            <Text>Account</Text>

            <TextInput />
        </Body>

        { !keyboardVisible && <NavigationBottom /> }
      </View>
    )
  }
}
