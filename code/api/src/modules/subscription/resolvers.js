// App Imports
import models from '../../setup/models'

// Get subscription by ID
export async function get(parentValue, { id }) {
  return await models.Subscription.findOne({ where: { id } })
}

// Get all subscriptions
export async function getAll() {
  return await models.Subscription.findAll()
}

// Create subscription
export async function create(parentValue, { crateId }, context) {
  if(context.auth.user && context.auth.user.id > 0) {
    return await models.Subscription.create({
      crateId,
      userId: context.auth.user.id
    })
  } else {
    throw new Error('Please login to subscribe to this crate.')
  }
}

// Delete subscription
export async function remove(parentValue, { id }) {
  return await models.Subscription.destroy({ where: { id } })
}