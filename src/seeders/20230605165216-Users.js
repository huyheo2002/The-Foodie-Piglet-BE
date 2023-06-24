'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'Văn Huy',
      email: "huy12@gmail.com",
      username: "huy12",
      password: "123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ngọc Long',
      email: "longshido@support.com",
      username: "longmem",
      password: "test@123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 0,
      avatar: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, [{
      name: 'Văn Huy',
      email: "huy12@gmail.com",
      username: "huy12",
      password: "123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ngọc Long',
      email: "longshido@support.com",
      username: "longmem",
      password: "test@123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 0,
      avatar: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }
};
