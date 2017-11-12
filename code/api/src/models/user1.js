'use strict';
module.exports = (sequelize, DataTypes) => {
  var User1 = sequelize.define('User1', {
    firstName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User1;
};