// Imports
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// App Imports

// Component
export default class WhatsNew extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  static navigationOptions = {
    title: `What's New`
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>What's New</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
