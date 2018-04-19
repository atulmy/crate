// Imports
import React  from 'react'
import PropTypes  from 'prop-types'
import { View, Text, ActivityIndicator } from 'react-native'

// UI Imports
import { secondary } from '../../../ui/common/colors'
import styles from './styles'

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
