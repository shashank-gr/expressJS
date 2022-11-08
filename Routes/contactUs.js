const path = require("path");

const express = require("express");
const routes = express.Router();

const rootDir = require("../util/path");

routes.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

module.exports = routes;
