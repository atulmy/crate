// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, Image, TouchableNativeFeedback } from 'react-native'
import { withNavigation } from 'react-navigation'

// UI Imports
import { blockMargin } from '../../../ui/common/responsive'
import styles from './styles'

// App Imports
import { routes, routeImage } from '../../../setup/Routes'
import { preGet as preGetProduct } from '../api/actions'

// Component
class Item extends PureComponent {

  navigate = (product) => {
    this.props.preGetProduct(product)

    this.props.navigation.navigate(routes.product.name, { slug: product.slug })
  }

  render() {
    const { product, lastItem, smallLayout } = this.props
    const { image, name, description } = product

    return (
      <TouchableNativeFeedback onPress={() => this.navigate(product)}>
        <View
          style={[styles.container, { marginBottom: (lastItem ? blockMargin : 0) } ]}
        >
          <Image
            source={{ uri: routeImage + image }}
            resizeMode={'cover'}
            style={styles.image}
          />

          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.title}>
              { name }
            </Text>

            <Text numberOfLines={1} style={styles.description}>
              { description }
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

// Component Properties
Item.propTypes = {
  preGetProduct: PropTypes.func.isRequired,
  smallLayout: PropTypes.bool
}

Item.defaultProps = {
  smallLayout: false
}

export default connect(null, { preGetProduct })(withNavigation(Item))
