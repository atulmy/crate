// Imports
import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'

// UI Imports
import { font } from '../../../ui/common/responsive'
import { grey2, black } from '../../../ui/common/colors'
import Touchable from '../../../ui/touchable/Touchable'
import Icon from '../../../ui/icon/Icon'
import styles from './styles'

// App Imports
import { routes } from '../../../setup/routes'

// Component
class NavigationBottom extends PureComponent {

  navigate = (routeName) => {
    if(this.props.navigation.state.routeName !== routeName) {
      this.props.navigation.navigate(routeName)
    }
  }

  active = (routeName) => {
    return this.props.navigation.state.routeName === routeName ? black : grey2
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Home */}
        <Touchable onPress={() => this.navigate(routes.home.name)}>
          <View style={styles.item}>
            <Icon
              name={routes.home.name}
              size={font(23)}
              color={this.active(routes.home.name)}
            />

            <Text style={[styles.itemTitle, { color: this.active(routes.home.name) }]}>Home</Text>
          </View>
        </Touchable>

        {/* Crates */}
        <Touchable onPress={() => this.navigate(routes.crates.name)}>
          <View style={styles.item}>
            <Icon
              name={'shopping-basket'}
              size={font(23)}
              color={this.active(routes.crates.name)}
            />

            <Text style={[styles.itemTitle, { color: this.active(routes.crates.name) }]}>Crates</Text>
          </View>
        </Touchable>

        {/* What's New */}
        <Touchable onPress={() => this.navigate(routes.whatsNew.name)}>
          <View style={styles.item}>
            <Icon
              name={'whatshot'}
              size={font(23)}
              color={this.active(routes.whatsNew.name)}
            />

            <Text style={[styles.itemTitle, { color: this.active(routes.whatsNew.name) }]}>What's New</Text>
          </View>
        </Touchable>

        {/* Account */}
        <Touchable onPress={() => this.navigate(routes.account.name)}>
          <View style={styles.item}>
            <Icon
              name={'account-circle'}
              size={font(23)}
              color={this.active(routes.account.name)}
            />

            <Text style={[styles.itemTitle, { color: this.active(routes.account.name) }]}>Account</Text>
          </View>
        </Touchable>
      </View>
    )
  }
}

export default withNavigation(NavigationBottom)
