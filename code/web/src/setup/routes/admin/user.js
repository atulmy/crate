// App Imports
import Dashboard from '../../../modules/admin/Dashboard'

// Admin user routes
export const userList = {
  path: '/admin/users',
  component: Dashboard,
  auth: true
}