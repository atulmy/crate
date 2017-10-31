// Thought
export default (sequelize, DataTypes) => {
    return sequelize.define('thoughts', {
        name: {
            type: DataTypes.STRING
        },
        thought: {
            type: DataTypes.TEXT
        }
    })
}