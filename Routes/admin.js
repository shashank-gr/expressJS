const express = require("express");

const routers = express.Router();

const productController = require("../controllers/products");

//GET request to /admin/add-product
routers.get("/add-product", productController.getAddProduct);
//POST request to /admin/add-product
routers.post("/add-product", productController.postAddProduct);

module.exports = routers;
