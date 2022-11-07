const path = require("path");

const express = require("express");
const bodyParser = require("body-parser"); //getting the body parser utility

const adminRoute = require("./Routes/admin");
const shopRoute = require("./Routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //parsing the form data ; has a default next() to flow the data

app.use("/admin", adminRoute); //hadels all the requests starting with /admin
app.use("/shop", shopRoute); //hadels all the requests starting with /shop
app.use((req, res, next) => {
  //__dirname(is already the root)-->go to views-->get 404.html
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3500);
