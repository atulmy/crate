// Imports
import React  from 'react'
import PropTypes  from 'prop-types'
import { View, Text } from 'react-native'

// UI Imports
import Icon from '../../../ui/icon/Icon'
import { grey1 } from '../../../ui/common/colors'
import styles from './styles'

// Component
const EmptyMessage = (props) => (
  <View style={styles.container}>
    <Icon
      name={props.icon}
      size={35}
      color={grey1}
    />

    <Text style={styles.text}>{ props.message }</Text>
  </View>
)

// Component Properties
EmptyMessage.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.string
}
EmptyMessage.defaultProps = {
  icon: 'error-outline',
}

export default EmptyMessage

