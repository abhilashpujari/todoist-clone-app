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
    Tasks.belongsTo(models.Projects);
  };
  return Tasks;
};
