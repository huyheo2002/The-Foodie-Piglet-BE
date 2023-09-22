'use strict';

require("dotenv").config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [{
      keyword: "mon-khai-vi",
      name: 'Món khai vị',
      image: `${process.env.URL_SERVER}/public/base/appetizers-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "mon-chinh",
      name: 'Món Chính',
      image: `${process.env.URL_SERVER}/public/base/mainDishes-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "mon-hai-san",
      name: 'Món hải sản',
      image: `${process.env.URL_SERVER}/public/base/seaFood-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "bua-an-ket-hop",
      name: 'Bữa ăn kết hợp',
      image: `${process.env.URL_SERVER}/public/base/comboMeal-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "do-uong",
      name: 'Đồ uống',
      image: `${process.env.URL_SERVER}/public/base/beverages-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "mon-trang-mieng",
      name: 'Món tráng miệng',
      image: `${process.env.URL_SERVER}/public/base/desserts-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "vui-long-cho",
      name: 'Vui lòng chờ',
      image: `${process.env.URL_SERVER}/public/base/bg-overlay.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', [{
      keyword: "mon-khai-vi",
      name: 'Món khai vị',
      image: `${process.env.URL_SERVER}/public/base/appetizers-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "mon-chinh",
      name: 'Món Chính',
      image: `${process.env.URL_SERVER}/public/base/mainDishes-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "mon-hai-san",
      name: 'Món hải sản',
      image: `${process.env.URL_SERVER}/public/base/seaFood-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "bua-an-ket-hop",
      name: 'Bữa ăn kết hợp',
      image: `${process.env.URL_SERVER}/public/base/comboMeal-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "do-uong",
      name: 'Đồ uống',
      image: `${process.env.URL_SERVER}/public/base/beverages-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "mon-trang-mieng",
      name: 'Món tráng miệng',
      image: `${process.env.URL_SERVER}/public/base/desserts-bg.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyword: "vui-long-cho",
      name: 'Vui lòng chờ',
      image: `${process.env.URL_SERVER}/public/base/bg-overlay.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }
};
