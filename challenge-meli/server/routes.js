const express = require("express");

const searchController = require("./controllers/search-controller.js");
const itemController = require("./controllers/item-controller.js");

const router = express.Router();

router.get("/items", searchController.searchGet);
router.get("/items/:id", itemController.itemGet);

// Export router
module.exports = router;
