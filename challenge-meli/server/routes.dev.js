"use strict";

var express = require("express");

var searchControllers = require("./controllers/search-controller.js");

var itemControllers = require("./controllers/item-controller.js");

var router = express.Router();
router.get("/items", searchControllers.searchGet);
router.get("/items/:id", itemControllers.itemGet); // Export router

module.exports = router;