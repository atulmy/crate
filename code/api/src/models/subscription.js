// Subscription
const Subscription = (sequelize, DataTypes) => {
    return sequelize.define('products', {
        userId: {
            type: DataTypes.STRING
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
    Subscription.belongsTo(models.User);
}

export default Subscription