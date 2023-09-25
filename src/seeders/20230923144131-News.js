'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('News', [{
      name: 'Tin tức thời sự',
      desc:'Đây là tin tức thời sự',
      image: null,
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tin tức kinh tế',
      desc:'Đây là tin tức kinh tế',
      image: null,
      genreId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tin tức chính trị',
      desc:'Đây là tin tức chính trị',
      image: null,
      genreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tin tức truyền thông',
      desc:'Đây là tin tức truyền thông',
      image: null,
      genreId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('News', [{
      name: 'Tin tức thời sự',
      desc:'Đây là tin tức thời sự',
      image: null,
      genreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tin tức kinh tế',
      desc:'Đây là tin tức kinh tế',
      image: null,
      genreId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tin tức chính trị',
      desc:'Đây là tin tức chính trị',
      image: null,
      genreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tin tức truyền thông',
      desc:'Đây là tin tức truyền thông',
      image: null,
      genreId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
};