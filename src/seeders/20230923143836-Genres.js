'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Genres', [{
      name: 'Thời sự',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Kinh tế',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chính trị',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Truyền thông',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Genres', [{
      name: 'Thời sự',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Kinh tế',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chính trị',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Truyền thông',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }
};
