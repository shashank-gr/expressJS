const path = require("path");

const express = require("express");

const routers = express.Router();

//GET request to /shop/
//with GET/POST route HAS to mentioned even if it is '/', as they do exact route matching
routers.get("/", (req, res) => {
  // get the directory name(Routes)-->../(one level up: this is our root)-->viwes(go to views folder)-->shop.html(the html file)
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = routers;
