const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require('cors');
const app = express();


/** Middlewares */
app.use(cors());
app.use(express.json());



/** Configure Database */
const db = config.get("mongoURI");

mongoose
    .connect(db)
    .then(() => console.log("💻 Mondodb Connected"))
    .catch((err) => console.error(err));



/**
 * Routes
 */
app.get("/", (req, res) => {
    res.send("Server working 🔥");
});

module.exports = app;
