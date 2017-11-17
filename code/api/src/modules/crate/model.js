// Crate
export default (sequelize, DataTypes) => {
    return sequelize.define('crates', {
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        }
    })
}