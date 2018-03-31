// Imports
import React from 'react'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'

// App Imports
import { store } from './src/setup/store'
import Routes from './src/setup/Routes'

load = async () => {
  try {
    //AsyncStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlRoZSBBZG1pbiIsImVtYWlsIjoiYWRtaW5AY3JhdGUuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNTIwNzc2MTgzfQ.5RKSYW0-nhM7OSTfSSNZNg65k-XVSTlqqnJQncEdNM0')
    const token = await AsyncStorage.getItem('token')

    console.log(token)
  } catch (e) {
    console.error('Failed to load name.')
  }
}
load()

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
