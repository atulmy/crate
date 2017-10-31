// App Imports
import models from '../../models'

// Create
export async function create(parentValue, { name, email, password }) {
    return await models.User.create({
        name,
        email,
        password
    })
}

// Get by ID
export async function getById(parentValue, { id }) {
    return await models.User.findOne({ where: { id }})
}

// Get all
export async function getAll() {
    return await models.User.findAll()
}

// Delete
export async function remove(parentValue, { id }) {
    return await models.User.destroy({ where: { id }})
}