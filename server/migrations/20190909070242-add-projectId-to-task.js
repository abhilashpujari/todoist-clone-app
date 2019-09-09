"use strict";

export function up(queryInterface, Sequelize) {
  return queryInterface.addColumn("Tasks", "projectId", {
    type: Sequelize.INTEGER
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.removeColumn("Tasks", "projectId");
}
