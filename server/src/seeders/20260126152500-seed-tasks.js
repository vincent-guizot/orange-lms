"use strict";

const loadJson = require("./data.json");

module.exports = {
  async up(queryInterface) {
    const { tasks } = loadJson;

    await queryInterface.bulkInsert(
      "Tasks",
      tasks.map(({ id, ...el }) => ({
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
