"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("RoomParticipants", [
      // room 1 bán hàng - quản trị viên
      {
        userId: 1,
        roomId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // room 2 Bán hàng - Quản lý
      {
        userId: 1,
        roomId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        roomId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // room 3 Bán hàng - Nhân viên
      {
        userId: 3,
        roomId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        roomId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // room 5 Nhà bếp
      {
        userId: 5,
        roomId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        roomId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // room 6 Nhân viên giao hàng
      {
        userId: 5,
        roomId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        roomId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        roomId: 6,
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
