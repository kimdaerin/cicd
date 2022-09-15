'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userKey',
        targetKey: 'userKey',
      });
      this.belongsTo(models.Select, {
        foreignKey: 'selectKey',
        targetKey: 'selectKey',
      });
      this.hasMany(models.Recomment, {
        foreignKey: 'commentKey',
        sourceKey: 'commentKey',
      });
    }
  }
  Comment.init(
    {
      commentKey: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
