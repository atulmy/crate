// Imports
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

// UI Imports
import { primary, white, grey, grey2, black } from '../../ui/common/colors'

// App Imports

// Component
export default class NavigationBottom extends Component {

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
        <TouchableOpacity
          onPress={() => this.navigate('home')}
          style={styles.item}
        >
          <Icon
            name="home"
            size={25}
            color={this.active('home')}
          />

          <Text style={[styles.itemTitle, {color: this.active('home')}]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.navigate('whatsNew')}
          style={styles.item}
        >
          <Icon
            name="whatshot"
            size={25}
            color={this.active('whatsNew')}
          />

          <Text style={[styles.itemTitle, {color: this.active('whatsNew')}]}>What's New</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.navigate('crates')}
          style={styles.item}
        >
          <Icon
            name="shopping-basket"
            size={25}
            color={this.active('crates')}
          />

          <Text style={[styles.itemTitle, {color: this.active('crates')}]}>Crates</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.navigate('account')}
          style={styles.item}
        >
          <Icon
            name="account-circle"
            size={25}
            color={this.active('account')}
          />

          <Text style={[styles.itemTitle, {color: this.active('account')}]}>Account</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 55,
    elevation: 5,
    backgroundColor: white,
    borderTopWidth: 0.5,
    borderColor: grey
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemTitle: {
    fontSize: 11,
    paddingTop: 3
  }
})




