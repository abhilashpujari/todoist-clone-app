"use strict";
var bcrypt = require("bcrypt");

export default (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );

  async function encryptPasswordIfChanged(user, options) {
    if (user.changed("password")) {
      user.password = await bcrypt.hash(user.password, 12);
    }
  }

  Users.beforeCreate(encryptPasswordIfChanged);
  Users.beforeUpdate(encryptPasswordIfChanged);

  Users.prototype.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

  Users.associate = function(models) {
    Users.hasMany(models.Projects, {
      as: "projects",
      foreignKey: "userId"
    });
  };
  return Users;
};
