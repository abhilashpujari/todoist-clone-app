"use strict";
export default (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    "Tasks",
    {
      description: DataTypes.STRING,
      projectId: DataTypes.INTEGER,
      dueDate: DataTypes.DATE
    },
    {}
  );
  Tasks.associate = function(models) {
    Tasks.belongsTo(models.Projects);
  };
  return Tasks;
};
