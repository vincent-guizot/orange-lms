const app = require("./src/app");
const { sequelize } = require("./src/models"); // import index.js dari models

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    // Test koneksi database
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    // Jalankan server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
