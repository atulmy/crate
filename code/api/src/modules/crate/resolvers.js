// App Imports
import models from '../../setup/models'

// Get crate by ID
export async function get(parentValue, { id }) {
    return await models.Crate.findOne({ where: { id }})
}

// Get all crates
export async function getAll() {
    return await models.Crate.findAll()
}

// Create crate
export async function create(parentValue, { name, crate }) {
    return await models.Crate.create({
        name,
        crate
    })
}

// Delete crate
export async function remove(parentValue, { id }) {
    return await models.Crate.destroy({ where: { id }})
}