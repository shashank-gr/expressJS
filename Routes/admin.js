const express = require("express");

const routers = express.Router(); //useing the Router feature of express

routers.get("/add-product", (req, res) => {
  //GET request to /admin/add-product
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"></br><input type="number" name="quantity"/></br><button type="submit">submit product</button></form>'
  );
});

routers.post("/add-product", (req, res) => {
  //POST request to /admin/add-product
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = routers; // need to export the routers
