'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      clicks: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Links');
  }
};