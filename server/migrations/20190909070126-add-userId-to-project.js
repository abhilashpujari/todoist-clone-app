"use strict";

export function up(queryInterface, Sequelize) {
  return queryInterface.addColumn("Projects", "userId", {
    type: Sequelize.INTEGER
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.removeColumn("Projects", "userId");
}
