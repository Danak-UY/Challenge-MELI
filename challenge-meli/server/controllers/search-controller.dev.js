"use strict";

var fetch = require("node-fetch");

var CURRENCY_DATA = require("./../currencies-data.json");

var constants = require("./../constants.js");

var helper = require("./../helper.js");

exports.searchGet = function _callee(req, res) {
  var query, limit, meliResponse, meliJSON, jsonResponse;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = req.query.q.replace(/[-\s]/g, "+") || "";
          limit = req.query.limit || 50;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("".concat(constants.API_ENDPOINT + constants.SEARCH_ENDPOINT, "/search?q=").concat(query, "&limit=").concat(limit)));

        case 4:
          meliResponse = _context.sent;

          if (!(meliResponse.status == 200)) {
            _context.next = 16;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(meliResponse.json());

        case 8:
          meliJSON = _context.sent;
          jsonResponse = {
            author: {
              name: "Martín",
              lastname: "Cladera"
            },
            categories: [],
            items: []
          };
          meliJSON.filters[0].values[0].path_from_root.forEach(function (category) {
            jsonResponse.categories.push(category.name);
          });

          if (jsonResponse.categories.length == 0) {
            jsonResponse.categories.push(helper.getMaxResultCategory(meliJSON.available_filters) || "No Cateogries");
          }

          meliJSON.results.forEach(function (oneResult) {
            var resultCurrency = CURRENCY_DATA[oneResult.currency_id.toLowerCase()];
            var newItem = {
              id: oneResult.id,
              title: oneResult.title,
              price: {
                currency: resultCurrency.id,
                amount: oneResult.price,
                decimal: resultCurrency.decimal_places,
                symbol: resultCurrency.symbol
              },
              picture: oneResult.thumbnail,
              condition: oneResult.condition,
              free_shipping: oneResult.shipping.free_shipping,
              address: oneResult.address
            };
            jsonResponse.items.push(newItem);
          });
          res.json(jsonResponse);
          _context.next = 17;
          break;

        case 16:
          res.status(400).send("Bad Request");

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
};