// Imports
import { StackNavigator } from 'react-navigation'

// App Imports
import Home from '../modules/screens/Home'
import WhatsNew from '../modules/screens/WhatsNew'

const Routes = StackNavigator(
  {
    home: {
      screen: Home,
      path: 'home'
    },
    whatsNew: {
      screen: WhatsNew,
      path: 'whats-new'
    }
  },
  {
    initialRouteName: 'home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

export default Routes
