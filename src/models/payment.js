"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models["User"], { foreignKey: "userId" });
    }
  }
  Payment.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      paymentDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      discountCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      serviceFee: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactInfo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      orderStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      purchasedItems: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
