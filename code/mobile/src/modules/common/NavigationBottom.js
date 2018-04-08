// Imports
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import { withNavigation } from 'react-navigation'

// UI Imports
import Icon from 'react-native-vector-icons/MaterialIcons'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { routes } from '../../setup/Routes'

// Component
class NavigationBottom extends Component {

  navigate = (routeName) => {
    if(this.props.navigation.state.routeName !== routeName) {
      this.props.navigation.navigate(routeName)
    }
  }

  active = (routeName) => {
    return this.props.navigation.state.routeName === routeName ? black : grey2
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={() => this.navigate(routes.home.name)}>
          <View style={styles.item}>
            <Icon
              name={routes.home.name}
              size={23}
              color={this.active(routes.home.name)}
            />

            <Text style={[styles.itemTitle, { color: this.active(routes.home.name) }]}>Home</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => this.navigate(routes.whatsNew.name)}>
          <View style={styles.item}>
            <Icon
              name="whatshot"
              size={23}
              color={this.active(routes.whatsNew.name)}
            />

            <Text style={[styles.itemTitle, { color: this.active(routes.whatsNew.name) }]}>What's New</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => this.navigate(routes.crates.name)}>
          <View style={styles.item}>
            <Icon
              name="shopping-basket"
              size={23}
              color={this.active(routes.crates.name)}
            />

            <Text style={[styles.itemTitle, { color: this.active(routes.crates.name) }]}>Crates</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => this.navigate(routes.account.name)}>
          <View style={styles.item}>
            <Icon
              name="account-circle"
              size={23}
              color={this.active(routes.account.name)}
            />

            <Text style={[styles.itemTitle, { color: this.active(routes.account.name) }]}>Account</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

export default withNavigation(NavigationBottom)

// Component Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    elevation: 5,
    backgroundColor: white
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6
  },
  itemTitle: {
    fontSize: 11,
    paddingTop: 1
  }
})




