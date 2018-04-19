// Imports
import React, { PureComponent } from 'react'
import { View } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import Message from '../Message'

// Component
export default class Body extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        { this.props.children }

        <Message />
      </View>
    )
  }
}
