'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      address: {
        type: Sequelize.STRING
      },
      cityId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          //which model it belongs to
          model: 'Cities',
          //which column of that model it is refering to (this fk of airport model to pk of city model)
          key: 'id',
          as: 'cityId'
        },
        //we will never allow airport to be created without a city id
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airports');
  }
};