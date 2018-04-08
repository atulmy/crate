// Imports
import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'

// UI Imports
import { grey } from '../../ui/common/colors'

// App Imports
import Message from './Message'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grey
  }
})
