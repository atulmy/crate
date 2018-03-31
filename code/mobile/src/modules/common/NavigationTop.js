// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

// UI Imports
import { primary, white } from '../../ui/common/colors'

// App Imports

// Component
class NavigationTop extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {/* Left Icon */}
          { this.props.leftIcon }

          {/* Title */}
          { this.props.title ? <Text style={styles.title}>{ this.props.title }</Text> : null }
        </View>

        <View style={styles.rightContainer}>
          {/* Right Icon */}
          { this.props.rightIcon }
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

// Component Styles
const styles = StyleSheet.create({
  container: {
    elevation: 3,
    backgroundColor: primary,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    color: white,
    fontSize: 20
  }
})
