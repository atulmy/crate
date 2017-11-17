// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from '../setup/databaseConnection'

const models = {
    User: databaseConnection.import('./user/model'),
    Product: databaseConnection.import('./product/model'),
    Crate: databaseConnection.import('./crate/model'),
    Subscription: databaseConnection.import('./subscription/model')
}

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models)
    }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
