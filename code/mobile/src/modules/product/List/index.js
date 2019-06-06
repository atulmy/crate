// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { ScrollView } from 'react-navigation'

// UI Imports
import styles from './styles'

// App Imports
import { getList } from '../../product/api/actions'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import ProductItem from '../../product/Item'

// Component
class List extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(getList())
  }

  render() {
    const { isLoading, list } = this.props.products

    return (
      <View style={styles.container}>
        {
          isLoading
            ? <Loading />
            : list.length > 0
                ? <ScrollView style={styles.itemContainer}>
                    { list.map((product, i) => (
                        <ProductItem
                          key={product.id}
                          product={product}
                          lastItem={list.length - 1 === i}
                        />
                    )) }
                  </ScrollView>
                : <EmptyMessage message={'No new products are available at the moment.'} />
        }
      </View>
    )
  }
}

// Component Properties
List.propTypes = {
  products: PropTypes.object.isRequired
}

// Component State
function listState(state) {
  return {
    products: state.products
  }
}

export default connect(listState)(List)
