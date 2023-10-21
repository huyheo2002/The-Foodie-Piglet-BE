'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PermissionGroups', [{
      id: 1,
      keyword: "quan-ly-nhom-quyen",
      name: 'Quản lý nhóm quyền',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      keyword: "quan-ly-quyen",
      name: 'Quản lý quyền',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      keyword: "quan-ly-vai-tro",
      name: 'Quản lý vai trò',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      keyword: "quan-ly-nguoi-dung",
      name: 'Quản lý người dùng',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      keyword: "quan-ly-san-pham",
      name: 'Quản lý sản phẩm',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      keyword: "quan-ly-dat-ban",
      name: 'Quản lý đặt bàn',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      keyword: "quan-ly-hoa-don",
      name: 'Quản lý hóa đơn',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      keyword: "quan-ly-tin-tuc",
      name: 'Quản lý tin tức',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      keyword: "quan-ly-gio-hang",
      name: 'Quản lý giỏ hàng',
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
