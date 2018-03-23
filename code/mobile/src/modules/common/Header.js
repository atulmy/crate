// Imports
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// App Imports
import { primary } from '../../ui/common/colors'

// Component
export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>What's New</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    backgroundColor: primary,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  }
})




