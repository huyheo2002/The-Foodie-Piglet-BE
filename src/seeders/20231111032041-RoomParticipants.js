'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('RoomParticipants', [{
      userId: 1,
      roomId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 4,
      roomId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 4,
      roomId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3,
      roomId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 4,
      roomId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 5,
      roomId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3,
      roomId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 5,
      roomId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 6,
      roomId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3,
      roomId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
