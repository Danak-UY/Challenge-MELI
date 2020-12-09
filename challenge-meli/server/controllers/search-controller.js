const fetch = require("node-fetch");

exports.searchGet = async (req, res) => {
  if (req.query.q) {
    let meliAPI = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=${req.query.limit}`
    );
    let meliJSON = await meliAPI.json();
    console.log("meliJSON", meliJSON);
    res.send(meliJSON);
  } else {
    res.send("Welcome to SEACH.");
  }
};
