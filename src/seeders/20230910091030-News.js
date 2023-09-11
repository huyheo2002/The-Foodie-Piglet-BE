'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('News', [{
      name: 'Thời sự Hà nội 24h',
      des:'Đây là thời sự',
      avatar: null,
      news_typeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cuộc sống Hà nội 24h',
      des:'Đây là cuộc sống',
      avatar: null,
      news_typeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chiến tranh Hà nội 24h',
      des:'Đây là chiến tranh',
      avatar: null,
      news_typeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chính trị Hà nội 24h',
      des:'Đây là chính trị',
      avatar: null,
      news_typeId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('News', [{
      name: 'Thời sự Hà nội 24h',
      des:'Đây là thời sự',
      avatar: null,
      news_typeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cuộc sống Hà nội 24h',
      des:'Đây là cuộc sống',
      avatar: null,
      news_typeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chiến tranh Hà nội 24h',
      des:'Đây là chiến tranh',
      avatar: null,
      news_typeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chính trị Hà nội 24h',
      des:'Đây là chính trị',
      avatar: null,
      news_typeId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }
};