// Imports
import React from 'react'
import { createStackNavigator } from 'react-navigation'

// App Imports
import { getRoutesForStack } from '../../setup/helpers'
import WhatsNew from '../../modules/screens/WhatsNew'
import ProductDetail from '../../modules/product/Detail'

// Routes
export const routesProduct = {
  // Whats new
  whatsNew: {
    name: 'whatsNew',
    path: 'whats-new',
    screen: WhatsNew,
  },

  // Product detail
  product: {
    name: 'product',
    path: 'product/:slug',
    screen: ProductDetail
  }
}

export default createStackNavigator(getRoutesForStack(routesProduct), {
  initialRouteName: routesProduct.whatsNew.name,
  headerMode: 'none',
  navigationOptions: { headerVisible: false }
})
