// Imports
import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View, Text } from 'react-native'

// UI Imports
import { buttonPadding, blockMarginHalf, buttonRadius } from '../../ui/common/responsive'
import { grey, primary, white } from '../../ui/common/colors'
import { font } from '../common/responsive'

// Component
const Button = (props) => {
  const { title, iconLeft, iconRight, type, onPress } = props

  return(
    <TouchableNativeFeedback
      onPress={onPress}
    >
      <View style={styles.container}>
        { iconLeft }

        <Text style={{ fontSize: font(16), color: white, marginHorizontal: blockMarginHalf }}>{ title.toUpperCase() }</Text>

        {iconRight}
      </View>
    </TouchableNativeFeedback>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: buttonPadding,
    elevation: 2,
    backgroundColor: primary,
    marginHorizontal: blockMarginHalf,
    borderRadius: buttonRadius
  }
})
