"use strict";
export default (sequelize, DataTypes) => {
  const Projects = sequelize.define(
    "Projects",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Projects.associate = function(models) {
    Projects.belongsTo(models.Users, { as: "users", foreignKey: "userId" });
    Projects.hasMany(models.Tasks, {
      as: "tasks",
      foreignKey: "projectId"
    });
  };
  return Projects;
};
