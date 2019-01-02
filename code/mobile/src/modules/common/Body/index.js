// Imports
import React from 'react'
import { View, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-navigation'

// UI Imports
import { white } from '../../../ui/common/colors'
import styles from './styles'

// App Imports
import Message from '../Message'

// Component
const Body = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar
      barStyle={'light-content'}
      backgroundColor={white}
    />

    <View style={styles.content}>
      { children }
    </View>

    <Message />
  </SafeAreaView>
)

export default Body
