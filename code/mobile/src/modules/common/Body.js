// Imports
import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'

// Component
export default class Body extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        { this.props.children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

