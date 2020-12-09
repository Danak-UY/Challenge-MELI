"use strict";

var fetch = require("node-fetch");

exports.searchGet = function _callee(req, res) {
  var meliAPI, meliJSON;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!req.query.q) {
            _context.next = 11;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.mercadolibre.com/sites/MLA/search?q=".concat(req.query.q, "&limit=").concat(req.query.limit)));

        case 3:
          meliAPI = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(meliAPI.json());

        case 6:
          meliJSON = _context.sent;
          console.log("meliJSON", meliJSON);
          res.send(meliJSON);
          _context.next = 12;
          break;

        case 11:
          res.send("Welcome to SEACH.");

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};