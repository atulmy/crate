// App Imports
import List from '../../modules/crate/List'

// User routes
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true
  }
}
