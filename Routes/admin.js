const path = require("path");

const express = require("express");

const routers = express.Router(); //using the Router feature of express

//GET request to /admin/add-product
routers.get("/add-product", (req, res) => {
  // get the directory name(Routes)-->../(one level up: this is our root)-->viwes(go to views folder)-->add-product.html(the html file)
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

routers.post("/add-product", (req, res) => {
  //POST request to /admin/add-product
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = routers; // need to export the routers
