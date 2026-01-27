"use strict";

const loadJson = require("./data.json");

module.exports = {
  async up(queryInterface) {
    const { class_users } = loadJson;

    await queryInterface.bulkInsert(
      "ClassUsers",
      class_users.map(({ id, ...el }) => ({
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("ClassUsers", null, {});
  },
};
