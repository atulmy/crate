// Imports
import React from 'react'
import PropTypes  from 'prop-types'
import { Text, View, Image } from 'react-native'

// Assets
import men1Image from '../../../../../assets/images/stock/men/1.jpg'
import men2Image from '../../../../../assets/images/stock/men/2.jpg'
import men3Image from '../../../../../assets/images/stock/men/3.jpg'

// UI Imports
import Button from '../../../../ui/button/Button'
import styles from './styles'

// Component
const CollageMen = (props) => (
  <View style={styles.container}>
    <View style={styles.imagesContainer}>
      <View>
        <Image
          source={men1Image}
          resizeMode={'cover'}
          style={styles.imageLong}
        />
      </View>

      <View style={styles.imagesSplitContainer}>
        <View>
          <Image
            source={men2Image}
            resizeMode={'cover'}
            style={styles.imageSplit}
          />
        </View>

        <View>
          <Image
            source={men3Image}
            resizeMode={'cover'}
            style={styles.imageSplit}
          />
        </View>
      </View>
    </View>

    <View style={styles.titleContainer}>
      <Text style={styles.title}>MONTHLY CRATES FOR MEN</Text>
    </View>

    <View style={styles.content}>
      <Text style={styles.description}>
        Save time. Look great. The personal styling service customized to your fit, lifestyle & spending preferences.
      </Text>

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
CollageMen.propTypes = {
  getSubscription: PropTypes.func.isRequired
}

export default CollageMen
