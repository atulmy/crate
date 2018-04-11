// Imports
import React from 'react'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'

// App Imports
import { store } from './src/setup/store'
import Routes from './src/setup/routes'
import { setUser, setUserLocally } from './src/modules/user/api/actions'

// User Authentication
(async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    if (token && token !== 'undefined' && token !== '') {
      const user = JSON.parse(await AsyncStorage.getItem('user'))
      if (user) {
        store.dispatch(setUser(token, user))

        setUserLocally(token, user)

        console.log('User logged in.')
      }
    }
  } catch (e) {
    console.log('Failed to login user.')
  }
})()

// App
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <Routes />
      </Provider>
    )
  }
}
