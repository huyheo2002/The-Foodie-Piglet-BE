'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ChatRooms', [{
      id: 1,
      name: 'Bán hàng - Quản trị viên',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Bán hàng - Quản lý',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Bán hàng - Nhân viên',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Username',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: 'Nhà bếp',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: 'Nhân viên giao hàng',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
