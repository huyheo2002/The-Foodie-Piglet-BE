'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    return queryInterface.bulkInsert('Users', [{
      name: 'Văn Huy',
      email: "huy12@gmail.com",
      username: "huyadmin",
      password: "123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Văn Huy',
      email: "huy12@gmail.com",
      username: "huyuser",
      password: "123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Văn Huy',
      email: "huy12@gmail.com",
      username: "huystaff",
      password: "123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Văn Huy',
      email: "huy12@gmail.com",
      username: "huymanager",
      password: "123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, [{
      name: 'Văn Huy',
      email: "huy12@gmail.com",
      username: "huyadmin",
      password: "123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Văn Huy',
      email: "huy12@gmail.com",
      username: "huyuser",
      password: "123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Văn Huy',
      email: "huy12@gmail.com",
      username: "huystaff",
      password: "123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Văn Huy',
      email: "huy12@gmail.com",
      username: "huymanager",
      password: "123",
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }
};
