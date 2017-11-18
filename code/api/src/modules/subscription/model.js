// Subscription
const Subscription = (sequelize, DataTypes) => {
    return sequelize.define('subscriptions', {
        userId: {
            type: DataTypes.INTEGER
        },
        crateId: {
            type: DataTypes.INTEGER
        }
    })
}

Subscription.associate = function (models) {
    Subscription.belongsTo(models.User)
    Subscription.belongsTo(models.Crate)
}

export default Subscription