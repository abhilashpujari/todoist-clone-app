"use strict";
export default (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    "Tasks",
    {
      description: DataTypes.STRING,
      dueDate: DataTypes.DATE
    },
    {}
  );
  Tasks.associate = function(models) {
    Tasks.belongsTo(models.Projects, {
      as: "projects",
      foreignKey: "projectId"
    });

    Tasks.belongsTo(models.Users, {
      as: "users",
      foreignKey: "userId"
    });
  };
  return Tasks;
};
