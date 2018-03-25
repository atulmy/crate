// Imports
import { StackNavigator } from 'react-navigation'

// App Imports
import Home from '../modules/screens/Home'
import WhatsNew from '../modules/screens/WhatsNew'
import Crates from '../modules/screens/Crates'
import Account from '../modules/screens/Account'

export const routes = {
  home: {
    name: 'home',
    path: 'home',
    screen: Home
  },
  whatsNew: {
    name: 'whatsNew',
    path: 'whats-new',
    screen: WhatsNew
  },
  crates: {
    name: 'crates',
    path: 'crates',
    screen: Crates
  },
  account: {
    name: 'account',
    path: 'account',
    screen: Account
  }
}

const routesStack = Object.keys(routes).reduce((result, key) => {
  result[key] = routes[key]
  return result
}, {})

export default StackNavigator(routesStack, {
  initialRouteName: 'home',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})
