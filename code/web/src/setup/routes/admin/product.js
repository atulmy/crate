// App Imports
import ProductList from '../../../modules/admin/product/List'
import ProductCreateOrEdit from '../../../modules/admin/product/CreateOrEdit'

// Admin product routes
export const productList = {
  path: '/admin/products',
  component: ProductList,
  auth: true
}

export const productCreate = {
  path: '/admin/product/create',
  component: ProductCreateOrEdit,
  auth: true
}

export const productEdit ={
  path: (id = ':id') => (`/admin/product/${ id }/edit`),
  component: ProductCreateOrEdit,
  auth: true
}