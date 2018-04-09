// Imports
import React from 'react'
import PropTypes  from 'prop-types'
import { Text, View, Image } from 'react-native'

// Assets
import heroImage from '../../../../../assets/images/cover.jpg'

// UI Imports
import Button from '../../../../ui/button/Button'
import styles from './styles'

// Component
const Intro = (props) => (
  <View style={styles.container}>
    <Image
      source={heroImage}
      resizeMode={'cover'}
      style={styles.hero}
    />

    <View style={styles.content}>
      <Text style={styles.text}>Your monthly subscription of trendy clothes and accessories</Text>

      <Button
        iconLeft={'add'}
        title={'Get Subscription'}
        theme={'secondary'}
        onPress={props.getSubscription}
      />
    </View>
  </View>
)

// Component Properties
Intro.propTypes = {
  getSubscription: PropTypes.func.isRequired
}

export default Intro
