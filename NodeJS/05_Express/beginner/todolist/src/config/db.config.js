const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite", // Specify the path to your SQLite database file
});

module.exports = sequelize;
