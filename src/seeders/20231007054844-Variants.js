'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Variants', [{
      name: 'S',
      price:20,
      discountVariant:10,
      productId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:24,
      discountVariant:10,
      productId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:27,
      discountVariant:10,
      productId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:10,
      discountVariant:9,
      productId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:12,
      discountVariant:9,
      productId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:15,
      discountVariant:9,
      productId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:10,
      discountVariant:10,
      productId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:13,
      discountVariant:10,
      productId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:15,
      discountVariant:10,
      productId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:15,
      discountVariant:5,
      productId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:18,
      discountVariant:5,
      productId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:22,
      discountVariant:5,
      productId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:18,
      discountVariant:12,
      productId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:23,
      discountVariant:12,
      productId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:25,
      discountVariant:12,
      productId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:10,
      discountVariant:6,
      productId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:12,
      discountVariant:6,
      productId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:15,
      discountVariant:6,
      productId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:5,
      productId:7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:8,
      discountVariant:7,
      productId:7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:10,
      discountVariant:8,
      productId:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:8,
      discountVariant:7,
      productId:8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:10,
      discountVariant:7,
      productId:8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:12,
      discountVariant:7,
      productId:9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:2,
      discountVariant:5,
      productId:9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:4,
      discountVariant:7,
      productId:9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:5,
      discountVariant:8,
      productId:9,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:7,
      discountVariant:12,
      productId:10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:9,
      discountVariant:13,
      productId:10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:12,
      discountVariant:15,
      productId:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:5,
      productId:11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:7,
      discountVariant:8,
      productId:11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:10,
      discountVariant:10,
      productId:11,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:8,
      discountVariant:12,
      productId:12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:10,
      discountVariant:14,
      productId:12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:12,
      discountVariant:18,
      productId:12,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:6,
      productId:13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:7,
      discountVariant:8,
      productId:13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:8,
      discountVariant:10,
      productId:13,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:6,
      productId:14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:7,
      discountVariant:8,
      productId:14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:8,
      discountVariant:10,
      productId:14,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:7,
      discountVariant:12,
      productId:15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:9,
      discountVariant:10,
      productId:15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:10,
      discountVariant:10,
      productId:15,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:8,
      discountVariant:6,
      productId:16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:9,
      discountVariant:8,
      productId:16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:12,
      discountVariant:9,
      productId:16,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:9,
      discountVariant:10,
      productId:17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:10,
      discountVariant:12,
      productId:17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:12,
      discountVariant:10,
      productId:17,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:3,
      discountVariant:12,
      productId:18,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:5,
      discountVariant:12,
      productId:18,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:7,
      discountVariant:12,
      productId:18,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:4,
      discountVariant:12,
      productId:19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:5,
      discountVariant:18,
      productId:19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:7,
      discountVariant:20,
      productId:19,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:4,
      discountVariant:12,
      productId:20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:5,
      discountVariant:18,
      productId:20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:7,
      discountVariant:20,
      productId:20,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:4,
      discountVariant:12,
      productId:21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:5,
      discountVariant:18,
      productId:21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:7,
      discountVariant:20,
      productId:21,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:4,
      discountVariant:12,
      productId:22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:5,
      discountVariant:18,
      productId:22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:7,
      discountVariant:20,
      productId:22,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:4,
      discountVariant:12,
      productId:23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:5,
      discountVariant:18,
      productId:23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:7,
      discountVariant:20,
      productId:23,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:2,
      discountVariant:20,
      productId:24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:3,
      discountVariant:20,
      productId:24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:4,
      discountVariant:20,
      productId:24,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:2,
      discountVariant:20,
      productId:25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:5,
      discountVariant:20,
      productId:25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:6,
      discountVariant:20,
      productId:25,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:4,
      discountVariant:12,
      productId:26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:6,
      discountVariant:12,
      productId:26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:7,
      discountVariant:14,
      productId:26,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:4,
      discountVariant:15,
      productId:27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:6,
      discountVariant:20,
      productId:27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:7,
      discountVariant:20,
      productId:27,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:10,
      productId:28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:7,
      discountVariant:10,
      productId:28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:8,
      discountVariant:10,
      productId:28,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:10,
      productId:29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:7,
      discountVariant:10,
      productId:29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:8,
      discountVariant:10,
      productId:29,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:10,
      productId:30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:7,
      discountVariant:10,
      productId:30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:8,
      discountVariant:10,
      productId:30,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:3,
      discountVariant:0,
      productId:31,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:5,
      discountVariant:0,
      productId:31,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:7,
      discountVariant:5,
      productId:31,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:2,
      discountVariant:5,
      productId:32,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:4,
      discountVariant:5,
      productId:32,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:5,
      discountVariant:5,
      productId:32,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:2,
      discountVariant:0,
      productId:33,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:3,
      discountVariant:0,
      productId:33,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:4,
      discountVariant:5,
      productId:33,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:3,
      discountVariant:0,
      productId:34,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:5,
      discountVariant:0,
      productId:34,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:6,
      discountVariant:0,
      productId:34,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:2,
      discountVariant:0,
      productId:35,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:3,
      discountVariant:0,
      productId:35,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:4,
      discountVariant:5,
      productId:35,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:2,
      discountVariant:0,
      productId:36,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:3,
      discountVariant:0,
      productId:36,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:5,
      discountVariant:5,
      productId:36,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:2,
      discountVariant:0,
      productId:37,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:3,
      discountVariant:0,
      productId:37,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:4,
      discountVariant:5,
      productId:37,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:50,
      discountVariant:5,
      productId:38,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:55,
      discountVariant:6,
      productId:38,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:72,
      discountVariant:10,
      productId:38,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:50,
      discountVariant:5,
      productId:39,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:55,
      discountVariant:6,
      productId:39,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:72,
      discountVariant:10,
      productId:39,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:50,
      discountVariant:5,
      productId:40,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:55,
      discountVariant:6,
      productId:40,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:72,
      discountVariant:10,
      productId:40,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:70,
      discountVariant:5,
      productId:41,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:85,
      discountVariant:6,
      productId:41,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:90,
      discountVariant:10,
      productId:41,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:20,
      discountVariant:5,
      productId:42,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:25,
      discountVariant:6,
      productId:42,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:27,
      discountVariant:10,
      productId:42,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:80,
      discountVariant:5,
      productId:43,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:95,
      discountVariant:6,
      productId:43,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:110,
      discountVariant:10,
      productId:43,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:70,
      discountVariant:5,
      productId:44,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:85,
      discountVariant:6,
      productId:44,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:90,
      discountVariant:10,
      productId:44,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:70,
      discountVariant:5,
      productId:45,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:85,
      discountVariant:6,
      productId:45,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:90,
      discountVariant:10,
      productId:45,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:70,
      discountVariant:5,
      productId:46,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:85,
      discountVariant:6,
      productId:46,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:90,
      discountVariant:10,
      productId:46,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:70,
      discountVariant:5,
      productId:47,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:85,
      discountVariant:6,
      productId:47,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:90,
      discountVariant:10,
      productId:47,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:70,
      discountVariant:5,
      productId:48,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:85,
      discountVariant:6,
      productId:48,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:90,
      discountVariant:10,
      productId:48,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:70,
      discountVariant:5,
      productId:49,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:85,
      discountVariant:6,
      productId:49,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:90,
      discountVariant:10,
      productId:49,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:70,
      discountVariant:5,
      productId:50,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:85,
      discountVariant:6,
      productId:50,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:90,
      discountVariant:10,
      productId:50,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:20,
      discountVariant:5,
      productId:51,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:22,
      discountVariant:6,
      productId:51,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:23,
      discountVariant:10,
      productId:51,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:20,
      discountVariant:5,
      productId:52,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:22,
      discountVariant:6,
      productId:52,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:25,
      discountVariant:10,
      productId:52,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:15,
      discountVariant:5,
      productId:53,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:17,
      discountVariant:6,
      productId:53,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:20,
      discountVariant:10,
      productId:53,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:16,
      discountVariant:5,
      productId:54,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:17,
      discountVariant:6,
      productId:54,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:18,
      discountVariant:10,
      productId:54,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:20,
      discountVariant:5,
      productId:55,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:22,
      discountVariant:6,
      productId:55,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:25,
      discountVariant:10,
      productId:55,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:18,
      discountVariant:5,
      productId:56,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:20,
      discountVariant:6,
      productId:56,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:22,
      discountVariant:10,
      productId:56,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:24,
      discountVariant:10,
      productId:57,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:25,
      discountVariant:16,
      productId:57,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:26,
      discountVariant:16,
      productId:57,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:25,
      discountVariant:5,
      productId:58,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:28,
      discountVariant:6,
      productId:58,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:30,
      discountVariant:10,
      productId:58,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:14,
      discountVariant:5,
      productId:59,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:16,
      discountVariant:6,
      productId:59,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:20,
      discountVariant:10,
      productId:59,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:18,
      discountVariant:8,
      productId:60,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:20,
      discountVariant:12,
      productId:60,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:22,
      discountVariant:12,
      productId:60,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:12,
      discountVariant:5,
      productId:61,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:13,
      discountVariant:6,
      productId:61,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:15,
      discountVariant:10,
      productId:61,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:12,
      discountVariant:5,
      productId:62,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:13,
      discountVariant:6,
      productId:62,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:15,
      discountVariant:10,
      productId:62,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:6,
      discountVariant:5,
      productId:63,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:9,
      discountVariant:6,
      productId:63,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:10,
      discountVariant:10,
      productId:63,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:12,
      discountVariant:5,
      productId:64,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:13,
      discountVariant:6,
      productId:64,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:15,
      discountVariant:10,
      productId:64,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:5,
      productId:65,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:7,
      discountVariant:6,
      productId:65,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:8,
      discountVariant:10,
      productId:65,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:3,
      discountVariant:5,
      productId:66,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:5,
      discountVariant:6,
      productId:66,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:6,
      discountVariant:10,
      productId:66,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:6,
      discountVariant:5,
      productId:67,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:9,
      discountVariant:6,
      productId:67,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:11,
      discountVariant:10,
      productId:67,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:3,
      discountVariant:5,
      productId:68,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:4,
      discountVariant:6,
      productId:68,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:5,
      discountVariant:10,
      productId:68,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:12,
      discountVariant:5,
      productId:69,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:13,
      discountVariant:6,
      productId:69,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:15,
      discountVariant:10,
      productId:69,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:5,
      productId:70,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:6,
      discountVariant:6,
      productId:70,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:8,
      discountVariant:10,
      productId:70,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:5,
      productId:71,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:6,
      discountVariant:6,
      productId:71,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:8,
      discountVariant:10,
      productId:71,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:12,
      discountVariant:5,
      productId:72,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:14,
      discountVariant:6,
      productId:72,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:15,
      discountVariant:10,
      productId:72,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:5,
      productId:73,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:6,
      discountVariant:6,
      productId:73,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:8,
      discountVariant:10,
      productId:73,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:6,
      discountVariant:5,
      productId:74,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:7,
      discountVariant:6,
      productId:74,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:10,
      discountVariant:10,
      productId:74,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:12,
      discountVariant:5,
      productId:75,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:13,
      discountVariant:6,
      productId:75,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:15,
      discountVariant:10,
      productId:75,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:10,
      discountVariant:5,
      productId:76,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:11,
      discountVariant:6,
      productId:76,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:13,
      discountVariant:10,
      productId:76,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:25,
      discountVariant:5,
      productId:77,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:28,
      discountVariant:6,
      productId:77,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:30,
      discountVariant:10,
      productId:77,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:25,
      discountVariant:5,
      productId:78,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:30,
      discountVariant:6,
      productId:78,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:35,
      discountVariant:10,
      productId:78,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:28,
      discountVariant:5,
      productId:79,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:32,
      discountVariant:6,
      productId:79,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:38,
      discountVariant:10,
      productId:79,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:7,
      discountVariant:5,
      productId:80,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:9,
      discountVariant:6,
      productId:80,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:12,
      discountVariant:10,
      productId:80,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:5,
      discountVariant:5,
      productId:81,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:6,
      discountVariant:6,
      productId:81,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:8,
      discountVariant:10,
      productId:81,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:30,
      discountVariant:5,
      productId:82,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:35,
      discountVariant:6,
      productId:82,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:37,
      discountVariant:10,
      productId:82,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:45,
      discountVariant:5,
      productId:83,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:56,
      discountVariant:6,
      productId:83,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:62,
      discountVariant:10,
      productId:83,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:30,
      discountVariant:5,
      productId:84,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:32,
      discountVariant:6,
      productId:84,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:40,
      discountVariant:10,
      productId:84,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:15,
      discountVariant:5,
      productId:85,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:16,
      discountVariant:6,
      productId:85,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:19,
      discountVariant:10,
      productId:85,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:25,
      discountVariant:5,
      productId:86,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:30,
      discountVariant:6,
      productId:86,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:32,
      discountVariant:10,
      productId:86,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:15,
      discountVariant:5,
      productId:87,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:18,
      discountVariant:6,
      productId:87,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:20,
      discountVariant:10,
      productId:87,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:12,
      discountVariant:5,
      productId:88,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:15,
      discountVariant:6,
      productId:88,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:18,
      discountVariant:10,
      productId:88,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:11,
      discountVariant:5,
      productId:89,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:12,
      discountVariant:6,
      productId:89,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:14,
      discountVariant:10,
      productId:89,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:18,
      discountVariant:5,
      productId:90,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:20,
      discountVariant:6,
      productId:90,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:22,
      discountVariant:10,
      productId:90,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:18,
      discountVariant:5,
      productId:91,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:20,
      discountVariant:6,
      productId:91,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:22,
      discountVariant:10,
      productId:91,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:14,
      discountVariant:5,
      productId:92,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:15,
      discountVariant:6,
      productId:92,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:20,
      discountVariant:10,
      productId:92,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:15,
      discountVariant:5,
      productId:93,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:18,
      discountVariant:6,
      productId:93,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:22,
      discountVariant:10,
      productId:93,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:14,
      discountVariant:5,
      productId:94,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:15,
      discountVariant:6,
      productId:94,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:20,
      discountVariant:10,
      productId:94,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:18,
      discountVariant:5,
      productId:95,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:20,
      discountVariant:6,
      productId:95,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:22,
      discountVariant:10,
      productId:95,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:10,
      discountVariant:5,
      productId:96,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:12,
      discountVariant:6,
      productId:96,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:13,
      discountVariant:10,
      productId:96,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:9,
      discountVariant:5,
      productId:97,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:10,
      discountVariant:6,
      productId:97,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:12,
      discountVariant:10,
      productId:97,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:20,
      discountVariant:5,
      productId:98,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:24,
      discountVariant:6,
      productId:98,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:27,
      discountVariant:10,
      productId:98,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:20,
      discountVariant:5,
      productId:99,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:25,
      discountVariant:6,
      productId:99,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:29,
      discountVariant:10,
      productId:99,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:8,
      discountVariant:5,
      productId:100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:10,
      discountVariant:6,
      productId:100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:12,
      discountVariant:10,
      productId:100,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:18,
      discountVariant:5,
      productId:101,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:20,
      discountVariant:6,
      productId:101,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:25,
      discountVariant:10,
      productId:101,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:28,
      discountVariant:5,
      productId:102,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:30,
      discountVariant:6,
      productId:102,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:42,
      discountVariant:10,
      productId:102,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:18,
      discountVariant:5,
      productId:103,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:20,
      discountVariant:6,
      productId:103,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:22,
      discountVariant:10,
      productId:103,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:28,
      discountVariant:5,
      productId:104,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:32,
      discountVariant:6,
      productId:104,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:35,
      discountVariant:10,
      productId:104,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:38,
      discountVariant:5,
      productId:105,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:40,
      discountVariant:6,
      productId:105,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:45,
      discountVariant:10,
      productId:105,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:40,
      discountVariant:5,
      productId:106,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:44,
      discountVariant:6,
      productId:106,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:50,
      discountVariant:10,
      productId:106,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:18,
      discountVariant:5,
      productId:107,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:20,
      discountVariant:6,
      productId:107,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:22,
      discountVariant:10,
      productId:107,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:28,
      discountVariant:5,
      productId:108,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:30,
      discountVariant:6,
      productId:108,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:35,
      discountVariant:10,
      productId:108,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:38,
      discountVariant:5,
      productId:109,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:40,
      discountVariant:6,
      productId:109,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:45,
      discountVariant:10,
      productId:109,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:60,
      discountVariant:5,
      productId:110,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:62,
      discountVariant:6,
      productId:110,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:65,
      discountVariant:10,
      productId:110,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:30,
      discountVariant:5,
      productId:111,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:32,
      discountVariant:6,
      productId:111,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:35,
      discountVariant:10,
      productId:111,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:30,
      discountVariant:5,
      productId:112,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:42,
      discountVariant:6,
      productId:112,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:45,
      discountVariant:10,
      productId:112,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:30,
      discountVariant:5,
      productId:113,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:32,
      discountVariant:6,
      productId:113,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:35,
      discountVariant:10,
      productId:113,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:40,
      discountVariant:5,
      productId:114,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:42,
      discountVariant:6,
      productId:114,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:45,
      discountVariant:10,
      productId:114,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:25,
      discountVariant:5,
      productId:115,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:32,
      discountVariant:6,
      productId:115,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:45,
      discountVariant:10,
      productId:115,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:60,
      discountVariant:5,
      productId:116,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:62,
      discountVariant:6,
      productId:116,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:65,
      discountVariant:10,
      productId:116,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:30,
      discountVariant:5,
      productId:117,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:35,
      discountVariant:6,
      productId:117,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:40,
      discountVariant:10,
      productId:117,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:40,
      discountVariant:5,
      productId:118,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:42,
      discountVariant:6,
      productId:118,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:45,
      discountVariant:10,
      productId:118,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:20,
      discountVariant:5,
      productId:119,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:22,
      discountVariant:6,
      productId:119,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:25,
      discountVariant:10,
      productId:119,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'S',
      price:40,
      discountVariant:5,
      productId:120,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'M',
      price:42,
      discountVariant:6,
      productId:120,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'L',
      price:45,
      discountVariant:10,
      productId:120,
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },

  async down (queryInterface, Sequelize) {    
    return queryInterface.bulkDelete('Variants', []);
  }
};
