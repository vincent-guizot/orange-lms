"use strict";

const loadJson = require("./data.json");

module.exports = {
  async up(queryInterface) {
    const { task_submissions } = loadJson;

    await queryInterface.bulkInsert(
      "TaskSubmissions",
      task_submissions.map(({ id, ...el }) => ({
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("TaskSubmissions", null, {});
  },
};
