"use strict";

// Import express framework
var express = require("express"); // Import middleware


var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var compression = require("compression");

var helmet = require("helmet");

var cors = require("cors"); // Import routes


var searchRouter = require("./routes/search-routes.js"); // Setup default port


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
app.use(bodyParser.json());

if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
  app.get("*", function (req, res) {
    res.sendFile("build/index.html", {
      root: __dirname
    });
  });
} // Implement route for '/api' endpoint


app.use("/api", searchRouter); // Implement route for errors

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
}); // Start express app

app.listen(PORT, function () {
  console.log("Server is running on: ".concat(PORT));
});