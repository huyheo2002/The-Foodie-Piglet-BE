'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RolePermissions', {
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Roles",
          },
          key: "id",
        }
      },      
      permissionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Permissions",
          },
          key: "id",
        }
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
    await queryInterface.dropTable('RolePermissions');
  }
};