// Imports
import React  from 'react'
import PropTypes  from 'prop-types'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

// UI Imports
import { blockMarginHalf, blockPadding } from '../../ui/common/responsive'
import { secondary, grey3 } from '../../ui/common/colors'

// Component
const Loading = (props) => (
  <View style={styles.container}>
    <ActivityIndicator size={props.size} color={secondary} />

    <Text style={styles.text}>{ props.message }</Text>
  </View>
)

// Component Properties
Loading.propTypes = {
  message: PropTypes.string,
  size: PropTypes.string
}
Loading.defaultProps = {
  message: 'loading...',
  size: 'large'
}

export default Loading

// Component Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: blockPadding
  },
  text: {
    color: grey3,
    marginTop: blockMarginHalf
  }
})
