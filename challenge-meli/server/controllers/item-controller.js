exports.itemGet = async (req, res) => {
  if (req.params.id) {
    res.send("Your id is " + req.params.id);
  } else {
    res.send("Welcome to SEACH.");
  }
};
