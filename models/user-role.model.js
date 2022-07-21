'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_role.init({
      role_id: DataTypes.STRING,
      user_id: DataTypes.STRING,
      // updatedAt: {
    //   type: DataTypes.DATE
    //   },
  deletedAt: {
      allowNull: true,
      type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'user_role',
  });

  // user.associate = function (models) {
  //   user.belongsToMany(models.users, {
  //     through: "user_role",
  //     foreignKey: "user_id",
  //     otherKey: "role_id"    
  //   });
  // }
  return user_role;
};