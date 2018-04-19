// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, Image, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'

// UI Imports
import ActionIcon from '../../../ui/icon/ActionIcon'
import styles from './styles'

// App Imports
import { routes, routeImage } from '../../../setup/routes'
import { get as getProduct } from '../api/actions'
import NavigationTop from '../../common/NavigationTop'
import Body from '../../common/Body'
import NavigationBottom from '../../common/NavigationBottom'
import Loading from '../../common/Loading'
import Related from '../Related'

// Component
class Detail extends PureComponent {

  componentDidMount() {
    const { navigation, getProduct } = this.props
    const slug = navigation.state.params.slug

    if(slug && slug !== '') {
      getProduct(slug)
    }
  }

  render() {
    const { product } = this.props
    const { isLoading, item } = product
    const { id, image, name, description, createdAt } = item

    return (
      <View style={styles.container}>
        {/* Navigation Top */}
        <NavigationTop
          title='Product'
          leftIcon={
            <ActionIcon
              icon={'arrow-back'}
              onPress={() => this.props.navigation.navigate(routes.whatsNew.name)}
            />
          }
        />

        {/* Body */}
        <Body>
          <ScrollView>
            {/* Image */}
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: routeImage + image }}
                resizeMode={'cover'}
                style={styles.image}
              />
            </View>

            {/* Product details */}
            <View style={styles.textContainer}>
              {
                isLoading
                  ? <Loading />
                  : <View>
                      <Text style={styles.title}>
                        { name }
                      </Text>

                      <Text style={styles.description}>
                        { description }
                      </Text>

                      <Text style={styles.date}>
                        Launched on { new Date(createdAt).toDateString() }
                      </Text>
                    </View>
              }
            </View>

            {/* Related products */}
            <Related productId={id} />
          </ScrollView>
        </Body>

        {/* Navigation Bottom */}
        <NavigationBottom />
      </View>
    )
  }
}

// Component Properties
Detail.propTypes = {
  product: PropTypes.object.isRequired,
  getProduct: PropTypes.func.isRequired
}

// Component State
function detailState(state) {
  return {
    product: state.product
  }
}

export default connect(detailState, { getProduct })(withNavigation(Detail))
