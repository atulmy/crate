// Subscription
const Subscription = (sequelize, DataTypes) => {
    return sequelize.define('subscriptions', {
        userId: {
            type: DataTypes.INTEGER
        },
        crateId: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        type: {
            type: DataTypes.INTEGER
        },
        gender: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.TEXT
        }
    })
}

Subscription.associate = function (models) {
    Subscription.belongsTo(models.User)
    Subscription.belongsTo(models.Crate)
}

export default Subscription