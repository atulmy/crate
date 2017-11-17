// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from '../setup/databaseConnection'

const models = {
    User: databaseConnection.import('./user/model'),
    Product: databaseConnection.import('./product/model'),
    Subscription: databaseConnection.import('./subscription/model'),
    Crate: databaseConnection.import('./crate/model')
}

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models)
    }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
