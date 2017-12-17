// App Imports
import ProductList from '../../../modules/admin/crate/List'
import ProductCreateOrEdit from '../../../modules/admin/crate/CreateOrEdit'

// Admin crate routes
export const crateList = {
  path: '/admin/crates',
  component: ProductList,
  auth: true
}

export const crateCreate = {
  path: '/admin/crate/create',
  component: ProductCreateOrEdit,
  auth: true
}

export const crateEdit ={
  path: (id = ':id') => (`/admin/crate/${ id }/edit`),
  component: ProductCreateOrEdit,
  auth: true
}