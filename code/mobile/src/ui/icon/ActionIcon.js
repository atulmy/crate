// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

// UI Imports
import { font } from '../common/responsive'
import { white } from '../common/colors'
import Icon from '../../ui/icon/Icon'

// Component
const ActionIcon = ({ onPress, icon }) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={icon}
          size={font(22)}
          color={white}
        />
      </View>
    </TouchableOpacity>
  )
}

// Component Properties
ActionIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default ActionIcon

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
