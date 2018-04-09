// Imports
import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

// Assets
import how1Image from '../../../../../assets/images/stock/how-it-works/1.jpg'
import how2Image from '../../../../../assets/images/stock/how-it-works/2.jpg'
import how3Image from '../../../../../assets/images/stock/how-it-works/3.jpg'

// UI Imports
import Icon from 'react-native-vector-icons/MaterialIcons'
import { white } from '../../../../ui/common/colors'
import styles from './styles'

// Component
const HowItWorks = () => (
  <ScrollView horizontal={true}>
    <View style={styles.container}>
      <Image
        source={how1Image}
        resizeMode={'cover'}
        style={styles.image}
      />

      <View style={styles.content}>
        <Icon
          name={'looks-one'}
          size={45}
          color={white}
          style={styles.icon}
        />

        <Text style={styles.title}>SUBSCRIBE TO YOUR CRATE</Text>

        <Text style={styles.description}>Choose one or multiple crates as per your need.</Text>
      </View>
    </View>

    <View style={styles.container}>
      <Image
        source={how2Image}
        resizeMode={'cover'}
        style={styles.image}
      />

      <View style={styles.content}>
        <Icon
          name={'looks-two'}
          size={45}
          color={white}
          style={styles.icon}
        />

        <Text style={styles.title}>RECEIVE A FIX DELIVERY</Text>

        <Text style={styles.description}>Get 3 to 5 pieces of clothing or accessories delivered to your door.</Text>
      </View>
    </View>

    <View style={styles.container}>
      <Image
        source={how3Image}
        resizeMode={'cover'}
        style={styles.image}
      />

      <View style={styles.content}>
        <Icon
          name={'looks-3'}
          size={45}
          color={white}
          style={styles.icon}
        />

        <Text style={styles.title}>KEEP WHAT YOU WANT</Text>

        <Text style={styles.description}>Only pay for what you keep. Returns are easy and free.</Text>
      </View>
    </View>
  </ScrollView>
)

export default HowItWorks
