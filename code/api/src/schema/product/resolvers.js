// App Imports
import models from '../../models'

// Get product by ID
export async function getById(parentValue, { id }) {
    return await models.Product.findOne({ where: { id }})
}
// Get product by slug
export async function getBySlug(parentValue, { slug }) {
    return await models.Product.findOne({ where: { slug }})
}

// Get all products
export async function getAll() {
    return await models.Product.findAll()
}

// Create product
export async function create(parentValue, { name, product }) {
    return await models.Product.create({
        name,
        product
    })
}

// Delete product
export async function remove(parentValue, { id }) {
    return await models.Product.destroy({ where: { id }})
}