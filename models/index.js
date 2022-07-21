const config = 
require("../config/db.config.js");

  const Sequelize = require("sequelize");
  const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
      {
        host: config.HOST,
        dialect: config.dialect,
        operatorAliases: false,

        pool: {
          max: config.pool.max,
          min: config.pool.min,
          acquire: config.pool.acquire,
          idle: config.pool.idle,
        }
      }
  );

  const db = {};

db.sequelize = Sequelize;
db.Sequelize = Sequelize;
db.Sequelize = Sequelize;


db.user = require("../models/user.model.js") (sequelize, Sequelize);
db.role = require("../models/role.model.js") (sequelize, Sequelize);
db.user_role = require("../models/user_role.model.js") (sequelize, Sequelize);


  db.role.belongsToMany(db.user, {
    through: "user_role",
    foreignKey: "role_id",
    otherKey: "user_id"
  });

  db.user.belongsToMany(db.role, {
    through: "user_role",
    foreignKey: "user_id",
    otherKey: "role_id"
  });

  db.user_role.belongsToMany(db.user_role, {
    through: "role_id",
    foreignKey: "user_id"
  })

db.ROLES = ["user", "admin"];

module.exports = db;