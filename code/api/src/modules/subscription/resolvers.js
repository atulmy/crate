// App Imports
import models from '../../setup/models'

// Get subscription by ID
export async function get(parentValue, {id}) {
  return await models.Subscription.findOne({where: {id}})
}

// Get all subscriptions
export async function getAll() {
  return await models.Subscription.findAll()
}

// Create subscription
export async function create(parentValue, {name, subscription}) {
  return await models.Subscription.create({
    name,
    subscription
  })
}

// Delete subscription
export async function remove(parentValue, {id}) {
  return await models.Subscription.destroy({where: {id}})
}