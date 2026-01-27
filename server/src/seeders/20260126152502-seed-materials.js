"use strict";

const loadJson = require("./data.json");

module.exports = {
  async up(queryInterface) {
    const { materials } = loadJson;

    await queryInterface.bulkInsert(
      "Materials",
      materials.map(({ id, ...el }) => ({
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Materials", null, {});
  },
};
