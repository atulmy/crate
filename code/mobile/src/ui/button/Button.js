// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableNativeFeedback, View, Text } from 'react-native'

// UI Imports
import Icon from 'react-native-vector-icons/MaterialIcons'
import { buttonPadding, blockMarginHalf, buttonRadius } from '../common/responsive'
import { primary, secondary, white, grey2, grey4 } from '../common/colors'
import { font } from '../common/responsive'

// Component
const Button = (props) => {
  const { title, iconLeft, iconRight, theme, disabled, onPress } = props

  return(
    disabled
      ? <View style={[styles.container, styles.disabled, { backgroundColor: grey2 }]}>
          { iconLeft && <Icon
            name={iconLeft}
            size={font(18)}
            color={white}
          /> }

          <Text style={[styles.text, { color: white }]}>{ title.toUpperCase() }</Text>

          { iconRight && <Icon
            name={iconRight}
            size={font(18)}
            color={white}
          /> }
        </View>
      : <TouchableNativeFeedback onPress={onPress}>
          <View style={[styles.container, styles.enabled, { backgroundColor: themes[theme].background }]}>
            { iconLeft && <Icon
              name={iconLeft}
              size={font(18)}
              color={themes[theme].text}
            /> }

            <Text style={[styles.text, { color: themes[theme].text }]}>{ title.toUpperCase() }</Text>

            { iconRight && <Icon
              name={iconRight}
              size={font(18)}
              color={themes[theme].text}
            /> }
          </View>
        </TouchableNativeFeedback>
  )
}

// Component Properties
Button.propTypes = {
  title: PropTypes.string.isRequired,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool
}
Button.defaultProps = {
  theme: 'default',
  disabled: false
}

export default Button

// Component Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: buttonPadding,
    marginHorizontal: blockMarginHalf,
    borderRadius: buttonRadius
  },
  text: {
    fontSize: font(16),
    marginHorizontal: blockMarginHalf
  },
  enabled: {
    elevation: 2,
  },
  disabled: {
    elevation: 0,
  }
})

const themes = {
  primary: {
    background: primary,
    text: white
  },
  secondary: {
    background: secondary,
    text: white
  },
  default: {
    background: white,
    text: grey4
  }
}
