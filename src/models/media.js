'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Media.belongsTo(models["Rating"]);
      Media.belongsTo(models["User"], {
        foreignKey: "ownerId",
      });
    }
  }
  Media.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    filepath: {
      allowNull: false,
      type: DataTypes.STRING
    },
    mimetype: {
      allowNull: false,      
      type: DataTypes.STRING
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "Users",
        },
        key: "id",
      }
    },
    ratingId: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Media',
  });
  return Media;
};