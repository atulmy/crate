// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

// UI Imports
import Icon from 'react-native-vector-icons/MaterialIcons'
import { white } from '../common/colors'

// Component
const ToolbarIcon = ({ onPress, icon }) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={icon}
          size={25}
          color={white}
        />
      </View>
    </TouchableOpacity>
  )
}

// Component Properties
ToolbarIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default ToolbarIcon

// Component Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
