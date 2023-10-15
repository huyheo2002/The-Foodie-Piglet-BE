'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        }
      },
      paymentDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.FLOAT,
      }, 
      discountCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      serviceFee: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },  
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      contactInfo: {
        allowNull: false,
        type: Sequelize.STRING,
      },  
      paymentMethod: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      paymentStatus: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderStatus: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      purchasedItems: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      note: {
        allowNull: true,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Payments');
  }
};