"use strict";
export default (sequelize, DataTypes) => {
  const Projects = sequelize.define(
    "Projects",
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      owner: DataTypes.INTEGER
    },
    {}
  );
  Projects.associate = function(models) {
    Projects.belongsTo(models.Users);
    Projects.hasMany(models.Tasks);
  };
  return Projects;
};
