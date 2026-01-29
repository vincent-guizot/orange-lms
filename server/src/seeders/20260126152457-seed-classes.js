"use strict";

const loadJson = require("./data.json");

module.exports = {
  async up(queryInterface) {
    const { classes } = loadJson;

    await queryInterface.bulkInsert(
      "Classes",
      classes.map(({ id, ...el }) => ({
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Classes", null, {});
  },
};
