"use strict";

var methods = {
  getMaxResultCategory: function getMaxResultCategory(filters) {
    var maxCategory = null;

    try {
      if (filters[0].id == "category") {
        var maxCategoryResults = 0;
        filters[0].values.forEach(function (element) {
          if (element.results > maxCategoryResults) {
            maxCategory = element.name;
            maxCategoryResults = element.results;
          }
        });
      }
    } finally {
      return maxCategory;
    }
  }
};
module.exports = methods;