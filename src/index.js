/*
 *
 * Entry point for the application
 *
 */

// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8000;

// MIDDLEWARES
app.use(express.json());

// DB CONNECTION
require("./database/mongodb-conn");

// DECLARING THE APP ROUTES
const routes = require("./routes/index");

// ROUTES
app.use("/api", routes(router));

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(PORT, () => {
  console.log(`EMPLOYEE-MNGMT Service listening on PORT ${PORT}`);
});
