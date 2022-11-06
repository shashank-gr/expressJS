const express = require("express");

const routers = express.Router();

//GET request to /shop/
routers.get("/", (req, res) => {
  //with GET/POST route HAS to mentioned even if it is '/', as they do exact route matching

  res.send("<h1>Hello from Express !</h1>");
});

module.exports = routers;
