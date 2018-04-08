// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, Image, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

// Assets
import crateImage from '../../../../assets/images/crate.png'

// UI Imports
import { primary } from '../../../ui/common/colors'
import styles from './styles'

// App Imports
import { getList } from '../api/actions'

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  subscribe = () => {
    this.setState({
      isLoading: true
    })
  }

  render() {
    const { crate, lastItem } = this.props
    const { name, description } = crate
    const { isLoading } = this.state

    return (
      <View
        style={[styles.container, { marginBottom: (lastItem ? 10 : 0) } ]}
      >
        <View style={styles.imageContainer}>
          <Image
            source={crateImage}
            resizeMode={'cover'}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.title}>
            { name }
          </Text>

          <Text numberOfLines={2} style={styles.description}>
            { description }
          </Text>

          <Button
            title="Subscribe"
            color={primary}
            onPress={this.subscribe}
            disabled={isLoading}
          />
        </View>
      </View>
    )
  }
}

// Component Properties
Item.propTypes = {
  getList: PropTypes.func.isRequired
}

export default connect(null, { getList })(withNavigation(Item))
