"use strict";
export default (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Projects",
    {
      name: DataTypes.STRING,
      identifier: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    {}
  );
  Project.associate = function(models) {
    Project.belongsTo(models.Users);
    Project.hasMany(models.Tasks);
  };
  return Project;
};
