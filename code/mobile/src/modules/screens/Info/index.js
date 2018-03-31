// Imports
import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

// UI Imports
import Icon from 'react-native-vector-icons/MaterialIcons'
import { white } from '../../../ui/common/colors'
import styles from './styles'

// App Imports
import NavigationTop from '../../common/NavigationTop'
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'

// Component
export default class Info extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationTop
          leftIcon={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ height: 35, width: 35, alignItems: 'center', justifyContent: 'center' }}>
              <Icon
                name="arrow-back"
                size={25}
                color={white}
              />
            </TouchableOpacity>
          }
        />

        <Body>
        <Text>Info</Text>
        </Body>

        <NavigationBottom />
      </View>
    )
  }
}
