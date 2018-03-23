// Imports
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

// App Imports
import { grey } from '../../ui/common/colors'
import Header from '../common/Header'

// Component
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grey,
  }
})
