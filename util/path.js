const path = require("path");
//helper function go get the root directory
// const rootDir = path.dirname(require.main.filename); // gives the dirname of the main process which started this file(i.e app.js's dirname i.e is root dir)

module.exports = path.dirname(require.main.filename);
