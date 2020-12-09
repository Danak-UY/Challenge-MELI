const fetch = require("node-fetch");

const CURRENCY_DATA = require("../../currencies-data.json");
const constants = require("../../constants.js");

exports.searchGet = async (req, res) => {
  const query = req.query.q || "";
  const limit = req.query.limit || 50;
  let meliResponse = await fetch(
    `${
      constants.API_ENDPOINT + constants.SEARCH_ENDPOINT
    }/search?q=${query}&limit=${limit}`
  );

  if (meliResponse.status == 200) {
    let meliJSON = await meliResponse.json();

    let jsonResponse = {
      author: {
        name: "Martín",
        lastname: "Cladera",
      },
      categories: [],
      items: [],
    };

    meliJSON?.filters?.[0]?.values?.[0]?.path_from_root?.forEach((category) => {
      jsonResponse.categories.push(category.name);
    });

    meliJSON?.results?.forEach((oneResult) => {
      let resultCurrency = CURRENCY_DATA[oneResult.currency_id.toLowerCase()];
      let newItem = {
        id: oneResult.id,
        title: oneResult.title,
        price: {
          currency: resultCurrency.id,
          amount: oneResult.price,
          decimal: resultCurrency.decimal_places,
          symbol: resultCurrency.symbol,
        },
        picture: oneResult.thumbnail,
        condition: oneResult.condition,
        free_shipping: oneResult.shipping.free_shipping,
      };
      jsonResponse.items.push(newItem);
    });

    res.json(jsonResponse);
  } else {
    res.status(400).send("Bad Request");
  }
};
