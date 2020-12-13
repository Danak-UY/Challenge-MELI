const methods = {
  getMaxResultCategory: function (filters) {
    let maxCategory = null;
    if (filters?.[0]?.id == "category") {
      let maxCategoryResults = 0;
      filters[0].values.forEach((element) => {
        if (element.results > maxCategoryResults) {
          maxCategory = element.name;
          maxCategoryResults = element.results;
        }
      });
    }
    return maxCategory;
  },
};

module.exports = methods;
