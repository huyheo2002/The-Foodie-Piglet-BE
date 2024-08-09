"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Roles", [
      {
        id: 1,
        name: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Manager",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Staff",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "User",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Cooker",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Shipper",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, [
      {
        name: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Manager",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Staff",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cooker",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shipper",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
