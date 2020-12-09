const express = require("express");

const searchControllers = require("./controllers/search-controller.js");
const itemControllers = require("./controllers/item-controller.js");

const router = express.Router();

router.get("/items", searchControllers.searchGet);
router.get("/items/:id", itemControllers.itemGet);

// Export router
module.exports = router;
