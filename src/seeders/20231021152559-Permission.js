'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    return queryInterface.bulkInsert('Permissions', [{
      id: 1,
      keyword: "view-any-permission-group",
      name: "Xem nhóm quyền",
      permissionGroupId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      keyword: "create-permission-group",
      name: "Thêm nhóm quyền",
      permissionGroupId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      keyword: "update-permission-group",
      name: "Sửa nhóm quyền",
      permissionGroupId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      keyword: "delete-permission-group",
      name: "Xóa nhóm quyền",
      permissionGroupId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      keyword: "view-any-permission",
      name: "Xem quyền",
      permissionGroupId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      keyword: "create-permission",
      name: "Thêm quyền",
      permissionGroupId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      keyword: "update-permission",
      name: "Sửa quyền",
      permissionGroupId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      keyword: "delete-permission",
      name: "Xóa quyền",
      permissionGroupId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      keyword: "view-any-role",
      name: "Xem vai trò",
      permissionGroupId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      keyword: "create-role",
      name: "Thêm vai trò",
      permissionGroupId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      keyword: "update-role",
      name: "Sửa vai trò",
      permissionGroupId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      keyword: "delete-role",
      name: "Xóa vai trò",
      permissionGroupId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      keyword: "view-any-user",
      name: "Xem người dùng",
      permissionGroupId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      keyword: "create-user",
      name: "Thêm người dùng",
      permissionGroupId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      keyword: "update-user",
      name: "Sửa người dùng",
      permissionGroupId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      keyword: "delete-user",
      name: "Xóa người dùng",
      permissionGroupId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      keyword: "view-any-product",
      name: "Xem sản phẩm",
      permissionGroupId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      keyword: "create-product",
      name: "Thêm sản phẩm",
      permissionGroupId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      keyword: "update-product",
      name: "Sửa sản phẩm",
      permissionGroupId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 20,
      keyword: "delete-product",
      name: "Xóa sản phẩm",
      permissionGroupId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 21,
      keyword: "view-any-reserve-table",
      name: "Xem bàn",
      permissionGroupId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 22,
      keyword: "create-reserve-table",
      name: "Thêm bàn",
      permissionGroupId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 23,
      keyword: "update-reserve-table",
      name: "Sửa bàn",
      permissionGroupId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 24,
      keyword: "delete-reserve-table",
      name: "Xóa bàn",
      permissionGroupId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 25,
      keyword: "view-any-payment",
      name: "Xem hóa đơn",
      permissionGroupId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 26,
      keyword: "create-payment",
      name: "Thêm hóa đơn",
      permissionGroupId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 27,
      keyword: "update-payment",
      name: "Sửa hóa đơn",
      permissionGroupId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 28,
      keyword: "delete-payment",
      name: "Xóa hóa đơn",
      permissionGroupId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 29,
      keyword: "view-any-news",
      name: "Xem tin tức",
      permissionGroupId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 30,
      keyword: "create-news",
      name: "Thêm tin tức",
      permissionGroupId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 31,
      keyword: "update-news",
      name: "Sửa tin tức",
      permissionGroupId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 32,
      keyword: "delete-news",
      name: "Xóa tin tức",
      permissionGroupId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 33,
      keyword: "view-cart",
      name: "Xem thông tin giỏ hàng",
      permissionGroupId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 34,
      keyword: "add-to-cart",
      name: "Thêm sản phẩm vào giỏ hàng",
      permissionGroupId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 35,
      keyword: "delete-item-in-cart",
      name: "Xóa một sản phẩm trong giỏ hàng",
      permissionGroupId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 36,
      keyword: "refresh-cart",
      name: "Làm mới giỏ hàng",
      permissionGroupId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 37,
      keyword: "update-iten-in-cart",
      name: "Cập nhật sản phẩm trong giỏ hàng",
      permissionGroupId: 9,
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
