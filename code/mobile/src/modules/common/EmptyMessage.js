// Imports
import React  from 'react'
import PropTypes  from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

// UI Imports
import Icon from 'react-native-vector-icons/MaterialIcons'
import { blockMarginHalf, blockPadding, font } from '../../ui/common/responsive'
import { grey1, grey2 } from '../../ui/common/colors'

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

// Component Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: blockPadding
  },
  text: {
    fontSize: font(18),
    color: grey2,
    marginTop: blockMarginHalf
  }
})




