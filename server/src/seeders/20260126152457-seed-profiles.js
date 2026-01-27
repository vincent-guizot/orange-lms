"use strict";

const loadJson = require("./data.json");

module.exports = {
  async up(queryInterface) {
    const { profiles } = loadJson;

    await queryInterface.bulkInsert(
      "Profiles",
      profiles.map(({ id, ...el }) => ({
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Profiles", null, {});
  },
};
