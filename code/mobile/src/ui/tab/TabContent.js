// Imports
import React from 'react'
import { StyleSheet, View, TouchableNativeFeedback, Text } from 'react-native'

// UI Imports
import { blockMargin, blockPadding, blockPaddingHalf, font } from '../common/responsive'
import { grey2, secondary } from '../common/colors'
import PropTypes from 'prop-types'
import TabBar from './TabBar'

// Component
const TabContent = (props) => {
  const { items, active } = props

  return(
    <View style={styles.container}>
      { items[active] }
    </View>
  )
}

// Component Properties
TabContent.propTypes = {
  items: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired
}

export default TabContent

// Component Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: blockPadding
  }
})
