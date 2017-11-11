// App Imports
import models from '../../models'

// Get thoughts by ID
export async function getById(parentValue, { id }) {
    return await models.Product.findOne({ where: { id }})
}

// Get all thoughts
export async function getAll() {
    return await models.Product.findAll()
}

// Create thought
export async function create(parentValue, { name, thought }) {
    return await models.Product.create({
        name,
        thought
    })
}

// Delete thought
export async function remove(parentValue, { id }) {
    return await models.Product.destroy({ where: { id }})
}