"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Genres", [
      {
        name: "Món mới",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Khuyến mãi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sự kiện ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Đánh giá ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Genres", []);
  },
};
