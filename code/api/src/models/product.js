// Product
export default (sequelize, DataTypes) => {
    return sequelize.define('products', {
        name: {
            type: DataTypes.STRING
        },
        slug: {
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