const path = require("path");

const express = require("express");
const bodyParser = require("body-parser"); //getting the body parser utility

const adminRoute = require("./Routes/admin");
const shopRoute = require("./Routes/shop");
const contactUs = require("./Routes/contactUs");
const successPage = require("./Routes/success");
const errorPage = require("./Routes/404");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //parsing the form data ; has a default next() to flow the data
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute); //hadells all the requests starting with /admin both GET and POST
app.use("/shop", shopRoute); //hadels all the requests starting with /shop
app.use("/contactus", contactUs);
app.use("/success", successPage);
app.use(errorPage);
app.listen(3500);
