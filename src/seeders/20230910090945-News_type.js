'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('News_type', [{
      name: 'Thời sự',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cuộc sống',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chiến tranh',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chính trị',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('News_type', [{
      name: 'Thời sự',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cuộc sống',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chiến tranh',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chính trị',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }
};