// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get product by ID
export async function getById(parentValue, { id }) {
    const product = await models.Product.findOne({ where: { id }})

    if(!product) {
        // Product does not exists
        throw new Error('The product you are looking for does not exists or has been discontinued.')
    } else {
        return product
    }
}

// Get product by slug
export async function getBySlug(parentValue, { slug }) {
    const product = await models.Product.findOne({ where: { slug }})

    if(!product) {
        // Product does not exists
        throw new Error('The product you are looking for does not exists or has been discontinued.')
    } else {
        return product
    }
}

// Get all products
export async function getAll() {
    return await models.Product.findAll({ order: [['id', 'DESC']] })
}

// Get related products
export async function getRelated(parentValue, { productId }) {
    return await models.Product.findAll({
        where: {
            id: { [models.Sequelize.Op.not]: productId }
        },
        limit: 3,
        order: [[models.Sequelize.fn('RAND')]] // mock related products by showing random products
    })
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
    const product = await models.Product.findOne({ where: { id }})

    if(!product) {
        // Product does not exists
        throw new Error('The product does not exists.')
    } else {
        return await models.Product.destroy({ where: { id }})
    }
}

// Product types
export async function getTypes() {
    return Object.values(params.product.types)
}