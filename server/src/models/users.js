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
    {
      instanceMethods: {
        comparePassword: function(password) {
          if (bcrypt.compareSync(password, this.password)) {
            return this;
          } else {
            return false;
          }
        }
      }
    }
  );

  async function encryptPasswordIfChanged(user, options) {
    if (user.changed("password")) {
      user.password = await bcrypt.hash(user.password, 12);
    }
  }

  Users.beforeCreate(encryptPasswordIfChanged);
  Users.beforeUpdate(encryptPasswordIfChanged);

  Users.associate = function(models) {
    Users.hasMany(models.Projects);
  };
  return Users;
};
