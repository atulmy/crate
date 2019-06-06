// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import { getRelatedList } from '../../product/api/actions'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import ProductItem from '../../product/Item'

// Component
class Related extends PureComponent {

  componentDidMount() {
    const { productId, dispatch } = this.props

    dispatch(getRelatedList(productId))
  }

  render() {
    const { isLoading, list } = this.props.productsRelated

    return (
      <View style={styles.container}>
        {
          isLoading
            ? <Loading message="loading related products..." />
            : list.length > 0
                ? <View>
                    <Text style={styles.heading}>Related Products</Text>

                    <ScrollView horizontal={true}>
                      { list.map((product, i) => (
                        <ProductItem
                          key={product.id}
                          product={product}
                          lastItem={list.length - 1 === i}
                          compact={true}
                        />
                      )) }
                    </ScrollView>
                  </View>
                : <EmptyMessage message={'No related product is available at the moment'} />
        }
      </View>
    )
  }
}

// Component Properties
Related.propTypes = {
  productId: PropTypes.number.isRequired,
  productsRelated: PropTypes.object.isRequired
}

// Component State
function relatedState(state) {
  return {
    productsRelated: state.productsRelated
  }
}

export default connect(relatedState)(Related)
