// Imports
import React from 'react'
import { YellowBox } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Provider } from 'react-redux'

// App Imports
import { store } from './store'
import Routes from './routes'
import { setUser, setUserLocally } from '../modules/user/api/actions'

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

  constructor(props) {
    super(props)

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: componentWillUpdate is deprecated',
    ])
  }

  render() {
    return (
      <Provider store={store} key="provider">
        <Routes />
      </Provider>
    )
  }
}
