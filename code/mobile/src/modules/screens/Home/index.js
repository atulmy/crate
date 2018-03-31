// Imports
import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

// UI Imports
import Icon from 'react-native-vector-icons/MaterialIcons'
import { white } from '../../../ui/common/colors'
import styles from './styles'

// App Imports
import { routes } from '../../../setup/Routes'
import NavigationTop from '../../common/NavigationTop'
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'

// Component
export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigationTop
          title="Crate"
          rightIcon={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate(routes.info.name)}
              style={{ height: 35, width: 35, alignItems: 'center', justifyContent: 'center' }}
            >
              <View>
                <Icon
                  name="info-outline"
                  size={25}
                  color={white}
                />
              </View>
            </TouchableOpacity>
          }
        />

        <Body>
          <Text>Home</Text>
        </Body>

        <NavigationBottom />
      </View>
    )
  }
}
