// Setup Express App
const express = require("express");
const cors = require("cors");

// Setup Database
const sequelize = require("./config/db.config");
async function initializeDatabase() {
  try {
    await sequelize.sync();
    console.log("Database is synchronized");
  } catch (error) {
    console.error("Database synchronisation error", error);
  }
}
initializeDatabase();
// Setup Express App
const app = express();

/**
 * Middlewares
 */

// Log request details

var corsOptions = {
  origin: "http://localhost:8081",
};
// allow cross origin requests
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

/**
 * Routes
 */
const tasksRoutes = require("./routes/tasks.routes");
app.use("/tasks", tasksRoutes);
// Export the express app instance
module.exports = app;
