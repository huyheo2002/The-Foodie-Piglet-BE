"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rating.hasMany(models["Media"]);
    }
  }
  Rating.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      eval: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      comment: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      prodId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      for: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Rating",
    }
  );
  return Rating;
};
