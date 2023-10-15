'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tables.hasMany(models["ReserveTable"], { foreignKey: "idTable" } );      
    }
  }
  Tables.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    taken: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tables',
  });
  return Tables;
};