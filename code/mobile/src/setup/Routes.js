// Imports
import { StackNavigator } from 'react-navigation'

// App Imports
import Home from '../modules/home/Home'
import WhatsNew from '../modules/home/WhatsNew'

const Routes = StackNavigator(
  {
    home: {
      screen: Home
    },
    whatsNew: {
      screen: WhatsNew
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
