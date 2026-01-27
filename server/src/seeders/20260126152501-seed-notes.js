"use strict";

const loadJson = require("./data.json");

module.exports = {
  async up(queryInterface) {
    const { notes } = loadJson;

    await queryInterface.bulkInsert(
      "Notes",
      notes.map(({ id, ...el }) => ({
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Notes", null, {});
  },
};
