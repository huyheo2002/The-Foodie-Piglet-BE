'use strict';
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

// const hashPassword = (password) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let hashPass = await bcrypt.hashSync(password, salt);
//       resolve(hashPass);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    let hashPasswordFromBcrypt = hashPassword("123");
    return queryInterface.bulkInsert('Users', [{
      name: 'Văn Huy',
      email: "huy12@admin.com",
      username: "huyadmin",
      password: hashPasswordFromBcrypt,
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Văn Huy',
      email: "huy12@user.com",
      username: "huyuser",
      password: hashPasswordFromBcrypt,
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Văn Huy',
      email: "huy12@staff.com",
      username: "huystaff",
      password: hashPasswordFromBcrypt,
      phone: "01234567899",
      address: "Hà Nội",
      gender: 1,
      avatar: null,
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Văn Huy',
      email: "huy12@manager.com",
      username: "huymanager",
      password: hashPasswordFromBcrypt,
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
    let hashPasswordFromBcrypt = hashPassword("123");
    return queryInterface.bulkDelete('Users', null, [{
      name: 'Văn Huy',
      email: "huy12@gmail.com",
      username: "huyadmin",
      password: hashPasswordFromBcrypt,
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
      password: hashPasswordFromBcrypt,
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
      password: hashPasswordFromBcrypt,
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
      password: hashPasswordFromBcrypt,
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
