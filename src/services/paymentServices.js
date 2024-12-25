import db from "../models";
require("dotenv").config();

const getAllPayment = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let payment = await db.Payment.findAll({
        include: [
          {
            model: db.sequelize.models.User,
            attributes: ["name", "email", "username", "phone", "address"],
          },
        ],
      });

      resolve(payment);
    } catch (error) {
      console.log(error);
    }
  });
};

const getRevenueData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const payments = await db.Payment.findAll({
        attributes: [
          [db.sequelize.fn("MONTH", db.sequelize.col("paymentDate")), "month"],
          [db.sequelize.fn("SUM", db.sequelize.col("totalPrice")), "totalRevenue"],
        ],
        group: ["month"],
        order: [["month", "ASC"]],
      });

      const labels = payments.map((item) => `Tháng ${item.get("month")}`);
      const values = payments.map((item) => parseFloat(item.get("totalRevenue")));

      resolve({ labels, values });
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
};

const getOrdersPerHourData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const payments = await db.Payment.findAll({
        attributes: [
          [db.sequelize.fn("HOUR", db.sequelize.col("paymentDate")), "hour"],
          [db.sequelize.fn("COUNT", db.sequelize.col("id")), "orderCount"],
        ],
        group: ["hour"],
        order: [["hour", "ASC"]],
      });

      const hoursRange = Array.from({ length: 16 }, (_, i) => i + 8);

      const dataMap = Object.fromEntries(
        payments.map((item) => [
          parseInt(item.get("hour"), 10),
          parseInt(item.get("orderCount"), 10),
        ])
      );

      const labels = hoursRange.map((hour) => `${hour}h`);
      const values = hoursRange.map((hour) => dataMap[hour] ?? 0);

      resolve({ labels, values });
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
};

const getAllPaymentCompact = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let payment = await db.Payment.findAll({
        attributes: {
          exclude: [
            "userId",
            "discountCode",
            "serviceFee",
            "deliveryAddress",
            "contactInfo",
            "paymentMethod",
            "purchasedItems",
            "note",
            "createdAt",
            "updatedAt",
          ],
        },
      });

      resolve(payment);
    } catch (error) {
      console.log(error);
    }
  });
};

const findAllPaymentOfUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("userId", userId);
      let paymentOfUser = null;
      paymentOfUser = await db.Payment.findAll({
        where: {
          userId: userId,
        },
      });

      resolve(paymentOfUser);
    } catch (error) {
      reject(error);
    }
  });
};

const createNewOrder = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let newOrder = await db.Payment.create({
        userId: data.userId ?? null,
        paymentDate: data.paymentDate ?? null,
        totalPrice: data.totalPrice,
        discountCode: data.discountCode ?? null,
        serviceFee: data.serviceFee ?? null,
        deliveryAddress: data.deliveryAddress,
        contactInfo: data.contactInfo,
        orderStatus: data.orderStatus ?? "Đang xử lý",
        paymentMethod: data.paymentMethod ?? "Thanh toán trực tiếp",
        paymentStatus: data.paymentStatus ?? "Chưa thanh toán",
        purchasedItems: data.purchasedItems,
        note: data.note ?? null,
      });

      if (newOrder) {
        resolve({
          errCode: 0,
          message: "Ok",
        });
      } else {
        resolve({
          errCode: 1,
          message: "Order fail",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const editInfoOrder = (data, image) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      }

      const idPrim = data.id;
      let payment = await db.Payment.findByPk(idPrim);

      if (payment) {
        await payment.update({
          userId: data.userId,
          paymentDate: data.paymentDate,
          totalPrice: data.totalPrice,
          discountCode: data.discountCode,
          serviceFee: data.serviceFee,
          deliveryAddress: data.deliveryAddress,
          contactInfo: data.contactInfo,
          orderStatus: data.orderStatus,
          paymentMethod: data.paymentMethod,
          paymentStatus: data.paymentStatus,
          purchasedItems: data.purchasedItems,
          note: data.note,
        });

        resolve({
          errCode: 0,
          message: "Ok",
          payment: payment,
        });
      } else {
        resolve({
          errCode: 1,
          message: "Payment not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteOrder = (paymentId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Payment.destroy({
        where: { id: paymentId },
      });

      resolve({
        errCode: 0,
        message: "The payment is deleted",
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllPayment: getAllPayment,
  getAllPaymentCompact: getAllPaymentCompact,
  createNewOrder: createNewOrder,
  findAllPaymentOfUser: findAllPaymentOfUser,
  deleteOrder: deleteOrder,
  editInfoOrder: editInfoOrder,
  getRevenueData: getRevenueData,
  getOrdersPerHourData: getOrdersPerHourData
};
