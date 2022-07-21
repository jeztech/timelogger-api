'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE
        },
    deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
        },
  },
  {
    sequelize,
    modelName: 'user',
  });

  // user.associate = function (models) {
  //   user.belongsToMany(models.roles, {
  //     through: "user_role",
  //     foreignKey: "user_id",
  //     otherKey: "role_id"    
  //   });

  // };
  return user;
}