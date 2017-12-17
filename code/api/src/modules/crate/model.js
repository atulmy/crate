// Crate
const Crate = (sequelize, DataTypes) => {
  return sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
}

Crate.associate = function (models) {
  Crate.hasMany(models.Subscription)
}

export default Crate