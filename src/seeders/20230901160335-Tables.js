'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tables', [{
      name: 'DC1',
      taken: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DC2',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DC3',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DR1',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DR2',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DR3',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DR4',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DR5',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DR6',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DR7',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'DR8',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'FR1',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'FR2',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'FR3',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'FR4',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'FR5',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'FR6',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'FV1',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'FV2',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'SV1',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'SV2',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'SV3',
      taken: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'SV4',
      taken: false,
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
