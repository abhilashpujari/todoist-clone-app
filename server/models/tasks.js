"use strict";
export default (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Tasks",
    {
      content: DataTypes.STRING,
      dueDate: DataTypes.DATE,
      projectId: DataTypes.INTEGER
    },
    {}
  );
  Task.associate = function(models) {
    Task.belongsTo(models.Projects);
  };
  return Task;
};
