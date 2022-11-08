const express = require("express");

const routers = express.Router();

const shopController = require("../controllers/products");

//GET request to /shop/
//with GET/POST route HAS to mentioned even if it is '/', as they do exact route matching
routers.get("/", shopController.getShopPage);

module.exports = routers;
