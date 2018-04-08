// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import { routes } from '../../../setup/Routes'
import { getList as getCratesList } from '../../crate/api/actions'
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import CrateItem from '../../crate/Item'

// Component
class Crates extends Component {

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
        <Body>
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
        </Body>

        <NavigationBottom />
      </View>
    )
  }
}

// Component Properties
Crates.propTypes = {
  crates: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getCratesList: PropTypes.func.isRequired
}

// Component State
function cratesState(state) {
  return {
    crates: state.crates,
    user: state.user,
  }
}

export default connect(cratesState, { getCratesList })(Crates)
