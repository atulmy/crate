// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from '../setup/databaseConnection'

const models = {
    User: databaseConnection.import('./user'),
    Product: databaseConnection.import('./product')
}

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models)
    }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
