"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("RolePermissions", [
      // ADMIN
      // CURD nhóm quyền for admin
      {
        roleId: 1,
        permissionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd quyền for admin
      {
        roleId: 1,
        permissionId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd vai trò for admin
      {
        roleId: 1,
        permissionId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd người dùng for admin
      {
        roleId: 1,
        permissionId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd sản phẩm for admin
      {
        roleId: 1,
        permissionId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd hóa đơn for admin
      {
        roleId: 1,
        permissionId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd tin tức for admin
      {
        roleId: 1,
        permissionId: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // MANAGER
      // curd người dùng for admin
      {
        roleId: 2,
        permissionId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd sản phẩm for admin
      {
        roleId: 2,
        permissionId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd đặt bàn for admin
      {
        roleId: 2,
        permissionId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd hóa đơn for admin
      {
        roleId: 2,
        permissionId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd tin tức for admin
      {
        roleId: 2,
        permissionId: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // STAFF
      // curd sản phẩm for admin
      {
        roleId: 3,
        permissionId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 3,
        permissionId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 3,
        permissionId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 3,
        permissionId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd đặt bàn for admin
      {
        roleId: 3,
        permissionId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 3,
        permissionId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 3,
        permissionId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 3,
        permissionId: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd hóa đơn for admin
      {
        roleId: 3,
        permissionId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd tin tức for admin
      {
        roleId: 3,
        permissionId: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 3,
        permissionId: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 3,
        permissionId: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 3,
        permissionId: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // USER
      // curd đặt bàn for admin
      {
        roleId: 4,
        permissionId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 4,
        permissionId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 4,
        permissionId: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd hóa đơn for admin
      {
        roleId: 4,
        permissionId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 4,
        permissionId: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 4,
        permissionId: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // quản lý giỏ hàng của ng dùng only ng dùng :v
      {
        roleId: 4,
        permissionId: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 4,
        permissionId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 4,
        permissionId: 36,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 4,
        permissionId: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // COOKER
      // curd sản phẩm for admin
      {
        roleId: 5,
        permissionId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd đặt bàn for admin
      {
        roleId: 5,
        permissionId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // curd hóa đơn for admin
      {
        roleId: 5,
        permissionId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 5,
        permissionId: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // SHIPPER
      // curd hóa đơn for admin
      {
        roleId: 6,
        permissionId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
