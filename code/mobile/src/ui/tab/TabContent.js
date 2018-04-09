// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

// UI Imports
import { blockPadding } from '../common/responsive'

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
