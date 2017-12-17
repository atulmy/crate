// App Imports
import * as dashboard from './dashboard'
import * as product from './product'
import * as crate from './crate'
import * as user from './user'

// Admin routes
const admin = {
  ...dashboard,
  ...product,
  ...crate,
  ...user
}

export default admin
