// Imports
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

// App Imports

// Component
export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('men')}
        />
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
