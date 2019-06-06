// Imports
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

// UI Imports
import { scalable, blockPaddingHalf, font } from '../common/responsive'
import { grey1, grey2 } from '../common/colors'

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
    flex: 1,
    paddingVertical: blockPaddingHalf * 1.3,
    paddingHorizontal: blockPaddingHalf * 1.5,
    fontSize: font(18),
    height: scalable(48),
    borderBottomWidth: 1,
    borderColor: grey1
  }
})
