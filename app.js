const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"></br><input type="number" name="quantity"/></br><button type="submit">submit product</button></form>'
  );
});
app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("Hello from Express JS");
});
app.listen(3500);
