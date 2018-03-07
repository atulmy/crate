// App Imports
import * as dashboard from './dashboard'
import * as product from './product'
import * as crate from './crate'
import * as subscription from './subscription'
import * as user from './user'

// Admin routes
const admin = {
  ...dashboard,
  ...product,
  ...crate,
  ...subscription,
  ...user
}

export default admin
