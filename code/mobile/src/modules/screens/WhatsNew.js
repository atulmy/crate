// Imports
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

// App Imports
import { grey } from '../../ui/common/colors'
import NavigationTop from '../common/NavigationTop'
import Body from '../common/Body'
import NavigationBottom from '../common/NavigationBottom'

// Component
export default class WhatsNew extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Body>
          <ScrollView style={styles.itemContainer}>
            <Text>What's New</Text>
          </ScrollView>
        </Body>

        <NavigationBottom
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grey,
  },
  itemContainer: {
    flex: 1
  },
  item: {
    height: 200,
    backgroundColor: 'red',
    marginVertical: 10
  }
})
