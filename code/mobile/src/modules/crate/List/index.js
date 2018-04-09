// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'

// UI Imports
import styles from './styles'

// App Imports
import { getList as getCratesList } from '../../crate/api/actions'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import CrateItem from '../../crate/Item'
import { routes } from '../../../setup/Routes'

// Component
class List extends Component {

  componentDidMount() {
    this.props.getCratesList()
  }

  onSuccessSubscription = () => {
    this.props.navigation.navigate(routes.account.name)
  }

  render() {
    const { isLoading, list } = this.props.crates

    return (
      <View style={styles.container}>
        {
          isLoading
            ? <Loading />
            : list.length > 0
              ? <ScrollView style={styles.itemContainer}>
                  { list.map((crate, i) => (
                    <CrateItem
                      key={crate.id}
                      crate={crate}
                      lastItem={list.length - 1 === i}
                      onSuccessSubscription={this.onSuccessSubscription}
                    />
                  )) }
                </ScrollView>
              : <EmptyMessage message={'No crate is available at the moment'} />
        }
      </View>
    )
  }
}

// Component Properties
List.propTypes = {
  crates: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getCratesList: PropTypes.func.isRequired
}

// Component State
function listState(state) {
  return {
    crates: state.crates,
    user: state.user,
  }
}

export default connect(listState, { getCratesList })(withNavigation(List))
