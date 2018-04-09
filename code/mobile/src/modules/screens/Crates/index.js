// Imports
import React, { Component } from 'react'
import { View } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'
import CrateList from '../../crate/List'

// Component
class Crates extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Body>
          <CrateList />
        </Body>

        <NavigationBottom />
      </View>
    )
  }
}

export default Crates
