// Imports
import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

// UI Imports
import { font, scalable } from '../../ui/common/responsive'
import { primary, grey2, white } from '../../ui/common/colors'
import Icon from '../../ui/icon/Icon'

// App Imports
import config from '../../setup/config'
import { getRoutesForStack } from '../../setup/helpers'
import Crates from '../../modules/screens/Crates'
import Account from '../../modules/screens/Account'
import HomeStack from './home'
import ProductStack from './product'

// API
export const routeApi = config.url.api

export const routeImage = routeApi

export const routes = {
  home: {
    name: 'home',
    path: 'home',
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon
        name={'home'}
        size={font(23)}
        color={tintColor}
      />,
    }
  },

  crates: {
    name: 'crates',
    path: 'crates',
    screen: Crates,
    navigationOptions: {
      tabBarLabel: 'Crates',
      tabBarIcon: ({ tintColor }) => <Icon
        name={'shopping-basket'}
        size={font(23)}
        color={tintColor}
      />,
    }
  },

  whatsNew: {
    name: 'whatsNew',
    path: 'whats-new',
    screen: ProductStack,
    navigationOptions: {
      tabBarLabel: 'Whats New',
      tabBarIcon: ({ tintColor }) => <Icon
        name={'whatshot'}
        size={font(23)}
        color={tintColor}
      />,
    }
  },

  account: {
    name: 'account',
    path: 'account',
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => <Icon
        name={'account-circle'}
        size={font(23)}
        color={tintColor}
      />,
    }
  }
}

const AppNavigator = createBottomTabNavigator(getRoutesForStack(routes), {
  initialRouteName: routes.home.name,
  navigationOptions: { tabBarVisible: true },
  tabBarOptions: {
    activeTintColor: primary,
    inactiveTintColor: grey2,
    style: {
      backgroundColor: white,
      paddingVertical: scalable(5),
      height: scalable(55)
    },
    tabStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    labelStyle: {
      marginLeft: 0
    }
  }
})

export default createAppContainer(AppNavigator)
