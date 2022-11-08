const path = require("path");
const rootDir = require("../util/path");

exports.getAddProduct = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res) => {
  res.redirect("/shop");
};
exports.getShopPage = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
