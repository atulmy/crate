// Imports
import { registerRootComponent } from 'expo'

// App Imports
import App from './src/setup'
import { name as appName } from './app.json'

// Bootstrap
// AppRegistry.registerComponent(appName, () => App)

registerRootComponent(App)