"use strict";

const loadJson = require("./data.json");

module.exports = {
  async up(queryInterface) {
    const { users } = loadJson;

    await queryInterface.bulkInsert(
      "Users",
      users.map(({ id, ...el }) => ({
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
