'use strict';

const params = require('../config/params');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [
          {
              name: 'T-Shirt for Men - White',
              description: 'A very nice white t-shirt for men.',
              type: params.product.types.cloth.id,
              gender: params.user.gender.male.id,
              image: '/images/stock/t-shirt-male-1.jpg',
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
          },
          {
              name: 'T-Shirt for Men - Grey',
              description: 'A very nice grey t-shirt for men.',
              type: params.product.types.cloth.id,
              gender: params.user.gender.male.id,
              image: '/images/stock/t-shirt-male-2.jpg',
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
          },
          {
              name: 'T-Shirt for Women - Black',
              description: 'A very nice black t-shirt for women.',
              type: params.product.types.cloth.id,
              gender: params.user.gender.female.id,
              image: '/images/stock/t-shirt-female-1.jpg',
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
          },
          {
              name: 'T-Shirt for Women - Grey',
              description: 'A very nice grey t-shirt for women.',
              type: params.product.types.cloth.id,
              gender: params.user.gender.female.id,
              image: '/images/stock/t-shirt-female-2.jpg',
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
          },
          {
              name: 'Watch for Men',
              description: 'A very nice watch for men.',
              type: params.product.types.accessory.id,
              gender: params.user.gender.male.id,
              image: '/images/stock/watch-male.jpg',
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
          },
          {
              name: 'Watch for Women',
              description: 'A very nice watch for women.',
              type: params.product.types.accessory.id,
              gender: params.user.gender.female.id,
              image: '/images/stock/watch-female.jpg',
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
          },
          {
              name: 'Belt for Men',
              description: 'A very nice belt for men.',
              type: params.product.types.accessory.id,
              gender: params.user.gender.male.id,
              image: '/images/stock/belt-male.jpg',
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
          },
          {
              name: 'Belt for Women',
              description: 'A very nice belt for women.',
              type: params.product.types.accessory.id,
              gender: params.user.gender.female.id,
              image: '/images/stock/belt-female.jpg',
              createdAt: Sequelize.literal('NOW()'),
              updatedAt: Sequelize.literal('NOW()')
          }
      ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
}