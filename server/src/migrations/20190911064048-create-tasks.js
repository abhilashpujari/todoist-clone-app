"use strict";
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable("Tasks", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING
    },
    projectId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Projects",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    },
    dueDate: {
      type: Sequelize.DATE
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable("Tasks");
}
