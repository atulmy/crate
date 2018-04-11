// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, Image, Alert } from 'react-native'

// Assets
import crateImage from '../../../../assets/images/crate.png'

// UI Imports
import { blockMargin } from '../../../ui/common/responsive'
import Button from '../../../ui/button/Button'
import styles from './styles'

// App Imports
import config from '../../../setup/config'
import { remove as removeSubscription } from '../../subscription/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  loading = (isLoading) => {
    this.setState({
      isLoading
    })
  }

  unsubscribeCheck = () => {
    Alert.alert(
      'Unsubscribe',
      'Are you sure you want to stop receiving this crate?',
      [
        { text: 'KEEP RECEIVING', onPress: () => {} },
        { text: 'UNSUBSCRIBE', onPress: this.unsubscribe }
      ],
      { cancelable: true }
    )
  }

  unsubscribe = () => {
    const { subscription, onSuccessUnsubscribe, removeSubscription, messageShow, messageHide } = this.props

    this.loading(true)

    messageShow('Unsubscribing, please wait...')

    removeSubscription({ id: subscription.id })
      .then(response => {
        if (response.data.errors && response.data.errors.length > 0) {
          messageShow(response.data.errors[0].message)

          this.loading(false)
        } else {
          messageShow('Unsubscribed successfully.')

          onSuccessUnsubscribe()
        }
      })
      .catch(() => {
        messageShow('There was some error unsubscribing. Please try again.')

        this.loading(false)
      })
      .then(() => {
        setTimeout(() => {
          messageHide()
        }, config.message.error.timers.long)
      })
  }

  render() {
    const { subscription, lastItem } = this.props
    const { crate, createdAt } = subscription
    const { isLoading } = this.state

    return (
      <View style={[styles.container, { marginBottom: (lastItem ? 0 : blockMargin) }]}>
        <View style={styles.imageContainer}>
          <Image
            source={crateImage}
            resizeMode={'cover'}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.title}>
            { crate.name }
          </Text>

          <Text numberOfLines={2} style={styles.description}>
            { crate.description }
          </Text>

          <Text numberOfLines={2} style={styles.description}>
            Subscribed on { new Date(createdAt).toDateString() }
          </Text>

          <Button
            title={'Unsubscribe'}
            iconLeft={'remove-circle-outline'}
            theme={'secondary'}
            disabled={isLoading}
            onPress={this.unsubscribeCheck}
          />
        </View>
      </View>
    )
  }
}

// Component Properties
Item.propTypes = {
  subscription: PropTypes.object.isRequired,
  onSuccessUnsubscribe: PropTypes.func.isRequired,
  removeSubscription: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default connect(null, { removeSubscription, messageShow, messageHide })(Item)
