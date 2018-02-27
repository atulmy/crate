// App Imports
import params from '../../../setup/config/params'
import Dashboard from '../../../modules/admin/Dashboard'

// Admin dashboard routes
export const dashboard = {
  path: '/admin/dashboard',
  component: Dashboard,
  auth: true,
  role: params.user.roles.admin
}