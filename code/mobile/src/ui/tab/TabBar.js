// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableNativeFeedback, Text } from 'react-native'

// UI Imports
import { blockPadding, font } from '../common/responsive'
import { secondary } from '../common/colors'

// Component
const TabBar = (props) => {
  const { items, active, onSelect } = props

  return(
    <View style={styles.container}>
      { items.map(item => (
        <TouchableNativeFeedback
          onPress={ () => { onSelect(item.key) } }
          key={item.key}
        >
          <View style={[{ flex: 1 }, (active === item.key ? { borderBottomColor: secondary, borderBottomWidth: 2 } : {})]}>
            <Text style={ styles.tabItemTitle }>{ item.title.toUpperCase() }</Text>
          </View>
        </TouchableNativeFeedback>
      )) }
    </View>
  )
}

// Component Properties
TabBar.propTypes = {
  items: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default TabBar

// Component Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  tabItemTitle: {
    fontSize: font(18),
    textAlign: 'center',
    padding: blockPadding
  }
})
