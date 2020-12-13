"use strict";

// Import express framework
var express = require("express"); // Import middleware


var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var compression = require("compression");

var helmet = require("helmet");

var cors = require("cors"); // Import routes


var searchRouter = require("./routes.js"); // Setup default port


var PORT = process.env.PORT || 4000; // Create express app

var app = express(); // Implement middleware

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(bodyParser.json()); // Implement route for '/api' endpoint

app.use("/api", searchRouter); // Implement route for errors

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
}); // Start express app

app.listen(PORT, function () {
  console.log("Server is running on: ".concat(PORT));
});