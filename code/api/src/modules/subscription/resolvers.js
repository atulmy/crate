// App Imports
import models from '../models'

// Get crate by ID
export async function get(parentValue, { id }) {
    return await models.Subscription.findOne({ where: { id }})
}

// Get all crates
export async function getAll() {
    return await models.Subscription.findAll()
}

// Create crate
export async function create(parentValue, { name, crate }) {
    return await models.Subscription.create({
        name,
        crate
    })
}

// Delete crate
export async function remove(parentValue, { id }) {
    return await models.Subscription.destroy({ where: { id }})
}