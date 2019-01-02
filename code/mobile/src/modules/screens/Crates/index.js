// Imports
import React, { PureComponent } from 'react'
import { View } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import Body from '../../common/Body'
import CrateList from '../../crate/List'

// Component
class Crates extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Body>
          <CrateList />
        </Body>
      </View>
    )
  }
}

export default Crates
