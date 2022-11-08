const express = require("express");
const routes = express.Router();

const contactUsController = require("../controllers/contactUs");

routes.get("/", contactUsController.getContactUs);

module.exports = routes;
