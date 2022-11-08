const path = require("path");
const rootDir = require("../util/path");

exports.getContactUs = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
};

exports.postSuccessPage = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
