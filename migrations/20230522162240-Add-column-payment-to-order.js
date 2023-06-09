'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Orders', 'payment', {
        type: Sequelize.STRING,
        // allowNull: false,

      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.removeColumn('Orders', 'payment')]);
  },
};
