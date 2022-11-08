const express = require("express");
const routes = express.Router();

const successController = require("../controllers/contactUs");

routes.post("/", successController.postSuccessPage);

module.exports = routes;
