// Imports
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

// UI Imports
import { primary, white } from '../../ui/common/colors'

// App Imports

// Component
class NavigationTop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: white }}>Crate</Text>

        <TouchableOpacity>
          <Icon
            name="info-outline"
            size={25}
            color={white}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(NavigationTop)

// Component Styles
const styles = StyleSheet.create({
  container: {
    elevation: 3,
    backgroundColor: primary,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  }
})




