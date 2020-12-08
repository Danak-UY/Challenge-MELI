"use strict";

var fs = require("fs");

var fse = require("fs-extra");

var childProcess = require("child_process");

if (fs.existsSync("./build")) {
  fse.removeSync("./build");
} // Run 'react-scripts build' script


childProcess.execSync("react-scripts build", {
  stdio: "inherit"
}); // Move app build to server/build directory

fse.moveSync("./build", "./server/build", {
  overwrite: true
});