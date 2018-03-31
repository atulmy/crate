// Imports
import React  from 'react'
import PropTypes  from 'prop-types'
import { View, Text, ActivityIndicator } from 'react-native'

// UI Imports
import { secondary } from '../../ui/common/colors'

// Component
const Loading = (props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: 10 }}>
    <ActivityIndicator size={props.size} color={secondary} />

    <Text>{ props.message }</Text>
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
