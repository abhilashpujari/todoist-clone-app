"use strict";
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
  Users.associate = function(models) {
    Users.hasMany(models.Projects);
  };
  return Users;
};
