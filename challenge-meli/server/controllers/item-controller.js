const fetch = require("node-fetch");

const CURRENCY_DATA = require("./../currencies-data.json");
const constants = require("./../constants.js");

exports.itemGet = async (req, res) => {
  const itemId = req.params.id || "";
  let meliResponse = await fetch(`${constants.API_ENDPOINT}/items/${itemId}`);
  let meliResponseDescription = await fetch(
    `${constants.API_ENDPOINT}/items/${itemId}/description`
  );

  if (meliResponse.status == 200) {
    let meliJSON = await meliResponse.json();
    let meliJSONDescription = await meliResponseDescription.json();

    let meliResponseCategory = await fetch(
      `${constants.API_ENDPOINT}/categories/${meliJSON.category_id}`
    );
    let meliJSONCategory = await meliResponseCategory.json();

    let resultCurrency = CURRENCY_DATA[meliJSON.currency_id.toLowerCase()];

    let jsonResponse = {
      author: {
        name: "Martín",
        lastname: "Cladera",
      },
      categories: [],
      item: {
        id: meliJSON.id,
        title: meliJSON.title,
        price: {
          currency: resultCurrency.id,
          amount: meliJSON.price,
          decimal: resultCurrency.decimal_places,
          symbol: resultCurrency.symbol,
        },
        picture: meliJSON.pictures[0].url || meliJSON.thumbnail,
        condition: meliJSON.condition,
        free_shipping: meliJSON.shipping.free_shipping,
        sold_quantity: meliJSON.sold_quantity,
        description: meliJSONDescription.plain_text,
      },
    };

    meliJSONCategory.path_from_root.forEach((category) => {
      jsonResponse.categories.push(category.name);
    });

    res.json(jsonResponse);
  } else {
    res.status(400).send("Bad Request");
  }
};
