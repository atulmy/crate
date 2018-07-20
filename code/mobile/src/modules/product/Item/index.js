// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, Image } from 'react-native'
import { withNavigation } from 'react-navigation'

// UI Imports
import { blockMargin } from '../../../ui/common/responsive'
import Touchable from '../../../ui/touchable/Touchable'
import styles from './styles'

// App Imports
import { routes, routeImage } from '../../../setup/routes'
import { preGet as preGetProduct } from '../api/actions'

// Component
class Item extends PureComponent {

  navigate = (product) => {
    this.props.preGetProduct(product)

    this.props.navigation.navigate(routes.product.name, { slug: product.slug })
  }

  render() {
    const { product, lastItem, compact } = this.props
    const { image, name, description } = product

    return (
      <Touchable onPress={() => this.navigate(product)}>
        <View style={[(compact ? styles.containerCompact : styles.container), { marginBottom: (lastItem ? blockMargin : 0) } ]}>
          <Image
            source={{ uri: routeImage + image }}
            resizeMode={'cover'}
            style={compact ? styles.imageCompact : styles.image}
          />

          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={compact ? styles.titleCompact : styles.title}>
              { name }
            </Text>

            <Text numberOfLines={1} style={compact ? styles.descriptionCompact : styles.description}>
              { description }
            </Text>
          </View>
        </View>
      </Touchable>
    )
  }
}

// Component Properties
Item.propTypes = {
  preGetProduct: PropTypes.func.isRequired,
  compact: PropTypes.bool
}

Item.defaultProps = {
  compact: false
}

export default connect(null, { preGetProduct })(withNavigation(Item))
