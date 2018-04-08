// Imports
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

// UI Imports
import { blockMargin, blockPaddingHalf, font } from '../common/responsive'
import { grey2 } from '../common/colors'

// Component
const InputText = ({ onSubmitEditing, inputRef, ...props}) => {
  return(
    <TextInput
      ref={inputRef ? ref => inputRef(ref) : null}
      onSubmitEditing={() => {
        if (onSubmitEditing) onSubmitEditing()
      }}
      placeholderTextColor={grey2}
      underlineColorAndroid={grey2}
      style={styles.container}
      {...props}
    />
  )
}

export default InputText

// Component Styles
const styles = StyleSheet.create({
  container: {
    marginBottom: blockMargin,
    paddingHorizontal: blockPaddingHalf,
    height: font(35),
    fontSize: font(18),
  }
})
