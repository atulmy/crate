// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import { getListByUser as getSubscriptionListByUser } from '../../subscription/api/actions'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import Item from '../Item'

// Component
class Crates extends Component {

  componentDidMount() {
    this.props.getSubscriptionListByUser()
  }

  onSuccessUnsubscribe = () => {
    this.props.getSubscriptionListByUser()
  }

  render() {
    const { isLoading, list } = this.props.subscriptions

    return (
      <View style={styles.container}>
        {
          isLoading
            ? <Loading />
            : list.length > 0
            ?  list.map((subscription, i) => (
                <Item
                  key={subscription.id}
                  subscription={subscription}
                  lastItem={list.length - 1 === i}
                  onSuccessUnsubscribe={this.onSuccessUnsubscribe}
                />
              ))
            : <EmptyMessage message={'You are not subscribed to any crate yet'} />
        }
      </View>
    )
  }
}

// Component Properties
Crates.propTypes = {
  subscriptions: PropTypes.object.isRequired,
  getSubscriptionListByUser: PropTypes.func.isRequired
}

// Component State
function cratesState(state) {
  return {
    subscriptions: state.subscriptionsByUser
  }
}

export default connect(cratesState, { getSubscriptionListByUser })(Crates)
