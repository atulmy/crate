// Imports
import React, { PureComponent } from 'react'
import { View, Image } from 'react-native'

// Assets
import heroImage from '../../../../../assets/images/stock/how-it-works/3.jpg'

// UI Imports
import { TabBar, TabContent } from '../../../../ui/tab'
import styles from './styles'

// App Imports
import Profile from '../../../user/Profile'

// Component
class PostLogin extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      tabActive: 'login'
    }
  }

  tabSelect = (tabActive) => {
    this.setState({
      tabActive
    })
  }

  onSuccessRegister = () => {
    this.setState({
      tabActive: 'login'
    })
  }

  render() {
    const { tabActive } = this.state

    return (
      <View style={styles.container}>
        {/* Hero section */}
        <View style={styles.heroContainer}>
          <Image
            source={heroImage}
            resizeMode={'cover'}
            style={styles.hero}
          />

          <TabBar
            active={tabActive}
            onSelect={ this.tabSelect }
            items={[
              {title: 'Subscriptions', key: 'subscriptions'},
              {title: 'Profile', key: 'profile'}
            ]}
          />
        </View>

        <TabContent
          active={tabActive}
          items={{
            subscriptions: <View></View>,
            profile: <Profile />
          }}
        />
      </View>
    )
  }
}

export default PostLogin
