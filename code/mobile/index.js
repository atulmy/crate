// Imports
import { AppRegistry } from 'react-native'

// App Imports
import App from './src/setup'
import { name as appName } from './app.json'

// Bootstrap
AppRegistry.registerComponent(appName, () => App)
