// Imports
import React, { PureComponent } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

// Assets

// UI Imports
import Button from '../../../ui/button/Button'
import ActionIcon from '../../../ui/icon/ActionIcon'
import styles from './styles'

// App Imports
import { routes } from '../../../setup/routes'
import NavigationTop from '../../common/NavigationTop'
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'
import Intro from './Intro'
import HowItWorks from './HowItWorks'
import CollageMen from './Collage/Men'
import CollageWomen from './Collage/Women'

// Component
export default class Home extends PureComponent {

  getSubscription = () => {
    this.props.navigation.navigate(routes.crates.name)
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationTop
          title="Crate"
          rightIcon={
            <ActionIcon
              icon={'info-outline'}
              onPress={() => this.props.navigation.navigate(routes.info.name)}
            />
          }
        />

        <Body>
          <ScrollView>
            <View style={styles.bodyContainer}>
              {/* Intro */}
              <Intro getSubscription={this.getSubscription} />

              {/* How it works */}
              <HowItWorks />

              {/* Collage Men */}
              <CollageMen getSubscription={this.getSubscription} />

              {/* Collage Women */}
              <CollageWomen getSubscription={this.getSubscription} />
            </View>
          </ScrollView>
        </Body>

        <NavigationBottom />
      </View>
    )
  }
}
