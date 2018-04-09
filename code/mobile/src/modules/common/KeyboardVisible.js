// Imports
import React, { PureComponent } from 'react'
import { Keyboard } from 'react-native'

// Component
export default KeyboardVisible = ChildComponent => class extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      keyboardVisible: false
    }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
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
    return (
      <ChildComponent {...this.props} keyboardVisible={this.state.keyboardVisible} />
    )
  }
}
