// User
const User = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.TEXT
        },
        password: {
            type: DataTypes.TEXT
        }
    })
}


User.associate = function(models) {
    User.hasMany(models.Subscription);
}

export default User