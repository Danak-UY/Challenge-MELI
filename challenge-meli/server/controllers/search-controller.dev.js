"use strict";

var fetch = require("node-fetch");

var CURRENCY_DATA = require("../../currencies-data.json");

var API_ENDPOINT = require("../../constants.js");

exports.searchGet = function _callee(req, res) {
  var query, limit, meliResponse, meliJSON, jsonResponse;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = req.query.q;
          limit = req.query.limit || 0;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("https://api.mercadolibre.com/sites/MLA/search?q=".concat(req.query.q, "&limit=").concat(req.query.limit)));

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
          console.log(API_ENDPOINT);
          jsonResponse = {
            author: {
              name: "Martín",
              lastname: "Cladera"
            },
            categories: [],
            items: []
          };
          meliJSON.filters[0].values[0].path_from_root.forEach(function (filter) {
            jsonResponse.categories.push(filter.name);
          });
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
              free_shipping: oneResult.shipping.free_shipping
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