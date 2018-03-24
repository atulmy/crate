// Imports
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

// App Imports
import { grey, grey1 } from '../../ui/common/colors'
import NavigationTop from '../common/NavigationTop'
import Body from '../common/Body'
import NavigationBottom from '../common/NavigationBottom'

// Component
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationTop
          navigation={this.props.navigation}
        />

        <Body>
          <ScrollView style={styles.itemContainer}>
            <View style={styles.item}>
              <Text>body</Text>
            </View>

            <View style={styles.item}>
              <Text>body</Text>
            </View>

            <View style={styles.item}>
              <Text>body</Text>
            </View>

            <View style={styles.item}>
              <Text>body</Text>
            </View>

            <View style={styles.item}>
              <Text>body</Text>
            </View>
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
    backgroundColor: grey1,
    margin: 10
  }
})
