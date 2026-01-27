"use strict";

const loadJson = require("./data.json");

module.exports = {
  async up(queryInterface) {
    const { meetings } = loadJson;

    await queryInterface.bulkInsert(
      "Meetings",
      meetings.map(({ id, ...el }) => ({
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Meetings", null, {});
  },
};
