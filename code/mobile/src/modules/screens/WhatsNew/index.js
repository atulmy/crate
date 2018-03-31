// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, Image, ScrollView } from 'react-native'

// UI Imports
import styles from './styles'

// App Imports
import { getList as getProductList } from '../../product/api/actions'
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'
import Loading from '../../common/Loading'
import ProductItem from '../../product/Item'

// Component
class WhatsNew extends Component {

  componentDidMount() {
    this.props.getProductList()
  }

  render() {
    const { isLoading, list } = this.props.products

    return (
      <View style={styles.container}>
        <Body>
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
              : <Text>No products</Text>
        }
        </Body>

        <NavigationBottom />
      </View>
    )
  }
}

// Component Properties
WhatsNew.propTypes = {
  products: PropTypes.object.isRequired,
  getProductList: PropTypes.func.isRequired
}

// Component State
function whatsNewState(state) {
  return {
    products: state.products
  }
}

export default connect(whatsNewState, { getProductList })(WhatsNew)
