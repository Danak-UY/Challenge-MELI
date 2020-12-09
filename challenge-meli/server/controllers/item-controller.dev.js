"use strict";

exports.itemGet = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (req.params.id) {
            res.send("Your id is " + req.params.id);
          } else {
            res.send("Welcome to SEACH.");
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};