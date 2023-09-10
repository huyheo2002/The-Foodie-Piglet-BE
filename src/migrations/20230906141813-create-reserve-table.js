'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReserveTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTable: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Tables",
          },
          key: "id",
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      email: {
        type: Sequelize.STRING,
        allowNull: false,      
      },           
      phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dateStart: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dateEnd: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,   
        allowNull: false,   
      },
      updatedAt: {
        type: Sequelize.DATE,    
        allowNull: false,   
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReserveTables');
  }
};