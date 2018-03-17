import React from 'react'
import { StackNavigator } from 'react-navigation'

import Home from './src/modules/home/Home'
import Men from './src/modules/home/Men'

const RootStack = StackNavigator({
  home: {
    screen: Home
  },
  men: {
    screen: Men
  }
}, {
  initialRouteName: 'home',
  headerMode: 'none'
})

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
