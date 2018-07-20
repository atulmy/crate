// Imports
import React from 'react'
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'

// Component
const Touchable = ({ onPress, children }) => (
  Platform.OS === 'android'
    ? <TouchableNativeFeedback onPress={onPress}>{ children }</TouchableNativeFeedback>
    : <TouchableOpacity onPress={onPress}>{ children }</TouchableOpacity>
)

export default Touchable
