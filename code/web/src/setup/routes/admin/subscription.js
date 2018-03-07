// App Imports
import params from '../../../setup/config/params'
import SubscriptionList from '../../../modules/admin/subscription/List'

// Admin subscriptions routes
export const subscriptionList = {
  path: '/admin/subscriptions',
  component: SubscriptionList,
  auth: true,
  role: params.user.roles.admin
}