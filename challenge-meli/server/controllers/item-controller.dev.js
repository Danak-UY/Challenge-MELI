"use strict";

var fetch = require("node-fetch");

var CURRENCY_DATA = require("./../currencies-data.json");

var constants = require("./../constants.js");

exports.itemGet = function _callee(req, res) {
  var itemId, meliResponse, meliResponseDescription, meliJSON, meliJSONDescription, meliResponseCategory, meliJSONCategory, resultCurrency, jsonResponse;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          itemId = req.params.id || "";
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("".concat(constants.API_ENDPOINT, "/items/").concat(itemId)));

        case 3:
          meliResponse = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch("".concat(constants.API_ENDPOINT, "/items/").concat(itemId, "/description")));

        case 6:
          meliResponseDescription = _context.sent;

          if (!(meliResponse.status == 200)) {
            _context.next = 26;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(meliResponse.json());

        case 10:
          meliJSON = _context.sent;
          _context.next = 13;
          return regeneratorRuntime.awrap(meliResponseDescription.json());

        case 13:
          meliJSONDescription = _context.sent;
          _context.next = 16;
          return regeneratorRuntime.awrap(fetch("".concat(constants.API_ENDPOINT, "/categories/").concat(meliJSON.category_id)));

        case 16:
          meliResponseCategory = _context.sent;
          _context.next = 19;
          return regeneratorRuntime.awrap(meliResponseCategory.json());

        case 19:
          meliJSONCategory = _context.sent;
          resultCurrency = CURRENCY_DATA[meliJSON.currency_id.toLowerCase()];
          jsonResponse = {
            author: {
              name: "Martín",
              lastname: "Cladera"
            },
            categories: [],
            item: {
              id: meliJSON.id,
              title: meliJSON.title,
              price: {
                currency: resultCurrency.id,
                amount: meliJSON.price,
                decimal: resultCurrency.decimal_places,
                symbol: resultCurrency.symbol
              },
              picture: meliJSON.pictures[0].url || meliJSON.thumbnail,
              condition: meliJSON.condition,
              free_shipping: meliJSON.shipping.free_shipping,
              sold_quantity: meliJSON.sold_quantity,
              description: meliJSONDescription.plain_text
            }
          };

          try {
            meliJSONCategory.path_from_root.forEach(function (category) {
              jsonResponse.categories.push(category.name);
            });
          } catch (_unused) {
            jsonResponse.categories.push("Sin Categoría");
          }

          res.json(jsonResponse);
          _context.next = 27;
          break;

        case 26:
          res.status(400).send("Bad Request");

        case 27:
        case "end":
          return _context.stop();
      }
    }
  });
};