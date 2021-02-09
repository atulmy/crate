module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('users', 'style', {
    	    type: Sequelize.TEXT
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('users', 'style');
    }
  }
