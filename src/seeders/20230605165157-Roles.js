'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [{
      name: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Manager',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Staff',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'User',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {    
    return queryInterface.bulkDelete('Roles', null, [{
      name: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Manager',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Staff',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'User',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }
};
