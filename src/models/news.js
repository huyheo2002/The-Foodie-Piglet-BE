'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      News.belongsTo(models.News_type, { foreignKey: "news_typeId" });
    }
  }
  News.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    des: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    news_typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 4      
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
    modelName: 'News',
  });
  return News;
};