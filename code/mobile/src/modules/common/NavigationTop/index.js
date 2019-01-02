// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

// UI Imports
import styles from './styles'

// Component
class NavigationTop extends PureComponent {
  render() {
    const { leftIcon, title, rightIcon } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {/* Left Icon */}
          { leftIcon }

          {/* Title */}
          { title ? <Text style={styles.title}>{ title.toUpperCase() }</Text> : null }
        </View>

        {/* Right Icon */}
        <View style={styles.rightContainer}>
          { rightIcon }
        </View>
      </View>
    )
  }
}

// Component Properties
NavigationTop.propTypes = {
  leftIcon: PropTypes.any,
  title: PropTypes.any,
  rightIcon: PropTypes.any
}

export default withNavigation(NavigationTop)

