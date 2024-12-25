'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = await queryInterface.sequelize.query(
      "SELECT id, name FROM Products;",
      { type: Sequelize.QueryTypes.SELECT }
    );

    const paymentData = [];
    const paymentMethods = ["Thanh toán online", "Thanh toán trực tiếp"];
    const paymentStatuses = ["Đã thanh toán", "Chưa thanh toán"];
    const orderStatuses = ["Đang xử lý", "Đã xử lý", "Đã hủy bỏ"];
    const sizes = ["S", "M", "L"];

    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const getRandomPaymentDate = () => {
      const year = new Date().getFullYear();
      const month = Math.floor(Math.random() * 12);
      const day = Math.floor(Math.random() * 28) + 1;

      const randomHour = () => {
        return Math.floor(Math.random() * (23 - 8 + 1)) + 8;
      };

      const hour = randomHour();
      const minute = Math.floor(Math.random() * 60);
      const second = Math.floor(Math.random() * 60);

      return new Date(year, month, day, hour, minute, second);
    };

    for (let i = 0; i < 100; i++) {
      const selectedProducts = [];
      const productCount = Math.floor(Math.random() * 5) + 3;
      const usedProductIds = new Set();

      while (selectedProducts.length < productCount) {
        const randomProduct = getRandomItem(products);
        if (!usedProductIds.has(randomProduct.id)) {
          usedProductIds.add(randomProduct.id);
          selectedProducts.push({
            name: randomProduct.name,
            size: getRandomItem(sizes),
            quantity: Math.floor(Math.random() * 5) + 1,
            price: (Math.random() * 100).toFixed(2),
          });
        }
      }

      const purchasedItems = selectedProducts
        .map(
          (item) =>
            `name:${item.name}-size:${item.size}-quantity:${item.quantity}-price:${item.price}`
        )
        .join(";");

      const paymentStatus = getRandomItem(paymentStatuses);
      const orderStatus =
        paymentStatus === "Chưa thanh toán"
          ? getRandomItem(orderStatuses)
          : null;

      paymentData.push({
        userId: 2,
        paymentDate: getRandomPaymentDate(),
        totalPrice: selectedProducts
          .reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0)
          .toFixed(2),
        discountCode: null,
        serviceFee: (Math.random() * 5).toFixed(2),
        deliveryAddress: `Address ${i + 1}`,
        contactInfo: `email${i + 1}@example.com - User${i + 1} - 098765432${i}`,
        paymentMethod: getRandomItem(paymentMethods),
        paymentStatus: paymentStatus,
        orderStatus: orderStatus,
        purchasedItems: purchasedItems,
        note: "Fake data :v",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("Payments", paymentData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Payments", null, {});
  }
};
