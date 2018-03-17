import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Crate</Text>
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
