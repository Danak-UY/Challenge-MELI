"use strict";

var express = require("express");

var searchController = require("./controllers/search-controller.js");

var itemController = require("./controllers/item-controller.js");

var router = express.Router();
router.get("/items", searchController.searchGet);
router.get("/items/:id", itemController.itemGet); // Export router

module.exports = router;