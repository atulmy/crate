// Imports
import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-navigation'

// UI Imports
import ActionIcon from '../../../ui/icon/ActionIcon'
import styles from './styles'

// App Imports
import { routes } from '../../../setup/routes'
import { routesHome } from '../../../setup/routes/home'
import NavigationTop from '../../common/NavigationTop'
import Body from '../../common/Body'
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
      <Body>
        <NavigationTop
          title="Crate"
          rightIcon={
            <ActionIcon
              icon={'info-outline'}
              onPress={() => this.props.navigation.navigate(routesHome.info.name)}
            />
          }
        />

        <ScrollView style={styles.container}>
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
    )
  }
}
