// App Imports
import Detail from '../../modules/product/Detail'
import ProductList from '../../modules/user/Products'

// Product routes
export default {
  product: {
    path: (slug = ':slug') => (`/product/${ slug }`),
    component: Detail
  },
  productList: {
    path: '/products',
    component: ProductList,
    auth: true
  }
}
