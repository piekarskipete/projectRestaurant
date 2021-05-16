'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('orders', {
      orderId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

      },
      startDate:{type: Sequelize.DATE},
      totalPrice:{type: Sequelize.INTEGER},
      tableNumber:{type: Sequelize.INTEGER},
      completionTime:{type: Sequelize.INTEGER},
      currency:{ type: Sequelize.STRING}
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('orders');

  }
};
