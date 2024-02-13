//app.js
const express = require("express");
const app = express();

// dotenv
require('dotenv').config()

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;