'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here      
      CartItem.belongsTo(models["Cart"], { foreignKey: "cartId" });
      CartItem.belongsTo(models["Product"], { foreignKey: "prodId" });
    }
  }
  CartItem.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    size: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    createdAt: {
      type: DataTypes.DATE,   
      allowNull: false,   
    },
    updatedAt: {
      type: DataTypes.DATE,    
      allowNull: false,   
    },  
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};