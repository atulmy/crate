// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, Image } from 'react-native'
import { withNavigation } from 'react-navigation'

// Assets
import crateImage from '../../../../assets/images/crate.png'

// UI Imports
import { blockMargin } from '../../../ui/common/responsive'
import { primary } from '../../../ui/common/colors'
import Button from '../../../ui/button/Button'
import styles from './styles'

// App Imports
import config from '../../../setup/config'
import { create as createSubscription } from '../../subscription/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  #loading = isLoading => {
    this.setState({
      isLoading
    })
  }

  #subscribe = () => {
    const { user, onSuccessSubscription, dispatch } = this.props

    if(user.isAuthenticated) {
      const { crate } = this.props

      this.#loading(true)

      dispatch(messageShow('Subscribing, please wait...'))

      dispatch(createSubscription({crateId: crate.id}))
        .then(response => {
          this.#loading(false)
          
          if (response.data.errors && response.data.errors.length > 0) {
            dispatch(messageShow(response.data.errors[0].message))

          } else {
            dispatch(messageShow('Subscribed successfully.'))

            onSuccessSubscription()
          }
        })
        .catch(() => {
          dispatch(messageShow('There was some error subscribing to this crate. Please try again.'))

          this.#loading(false)
        })
        .then(() => {
          setTimeout(() => {
            dispatch(messageHide())
          }, config.message.error.timers.long)
        })
    } else {
      messageShow('You need to be signed in before you can subscribe to crate.')

      setTimeout(() => {
        dispatch(messageHide())
      }, config.message.error.timers.long)
    }
  }

  render() {
    const { crate, lastItem } = this.props
    const { name, description } = crate
    const { isLoading } = this.state

    return (
      <View style={[styles.container, { marginBottom: (lastItem ? blockMargin : 0) } ]}>
        <View style={styles.imageContainer}>
          <Image
            source={crateImage}
            resizeMode={'cover'}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.title}>
            { name }
          </Text>

          <Text numberOfLines={2} style={styles.description}>
            { description }
          </Text>

          <Button
            title={'Subscribe'}
            iconLeft={'add'}
            theme={'primary'}
            disabled={isLoading}
            onPress={this.#subscribe}
          />
        </View>
      </View>
    )
  }
}

// Component Properties
Item.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function itemState(state) {
  return {
    user: state.user
  }
}

export default connect(itemState)(withNavigation(Item))
