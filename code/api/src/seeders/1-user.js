'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/config.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
          {
              name: 'The Admin',
              email: 'admin@crate.com',
              password: bcrypt.hashSync('123456', config.saltRounds),
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
          },
          {
              name: 'The User',
              email: 'user@crate.com',
              password: bcrypt.hashSync('123456', config.saltRounds),
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
          }
      ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
}