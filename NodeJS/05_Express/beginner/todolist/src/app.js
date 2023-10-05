// Setup Express App
const express = require("express");
const cors = require("cors");
const path = require("path");
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
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./middlewares/logger");

var corsOptions = {
  origin: "http://localhost:8081",
};
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
// logger
app.use(logger);
// allow cross origin requests
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
app.use(errorHandler);

/**
 * Routes
 */
const tasksRoutes = require("./routes/tasks.routes");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.use("/api/tasks", tasksRoutes);
// Export the express app instance
module.exports = app;
