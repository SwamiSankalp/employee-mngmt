/*
 *
 * Connecting to the DB
 *
 */

// Dependencies
require("dotenv").config();
const mongoose = require("mongoose");

// Connect
mongoose.connect(process.env.MONGODB_CONN);

// Print the connection status
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
