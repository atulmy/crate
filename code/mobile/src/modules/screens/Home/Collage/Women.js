// Imports
import React from 'react'
import PropTypes  from 'prop-types'
import { Text, View, Image } from 'react-native'

// Assets
import women1Image from '../../../../../assets/images/stock/women/1.jpg'
import women2Image from '../../../../../assets/images/stock/women/2.jpg'
import women3Image from '../../../../../assets/images/stock/women/3.jpg'

// UI Imports
import Button from '../../../../ui/button/Button'
import styles from './styles'

// Component
const CollageWomen = (props) => (
  <View style={styles.container}>
    <View style={styles.imagesContainer}>
      <View style={styles.imagesSplitContainer}>
        <View>
          <Image
            source={women2Image}
            resizeMode={'cover'}
            style={styles.imageSplit}
          />
        </View>

        <View>
          <Image
            source={women3Image}
            resizeMode={'cover'}
            style={styles.imageSplit}
          />
        </View>
      </View>

      <View>
        <Image
          source={women1Image}
          resizeMode={'cover'}
          style={styles.imageLong}
        />
      </View>
    </View>

    <View style={styles.titleContainer}>
      <Text style={styles.title}>MONTHLY CRATES FOR WOMEN</Text>
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
CollageWomen.propTypes = {
  getSubscription: PropTypes.func.isRequired
}

export default CollageWomen
