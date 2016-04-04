import data from './wods';
import _ from 'lodash';

var wods =
  data.sort(
    (a, b) => 
      a.title > b.title ? 1
      : a.title < b.title ? -1
      : 0
    );

module.exports = {
  getWods: function(category) {
    if (category.toLowerCase() === 'all') {
      return wods;
    }

    return wods.filter((elem) => elem.category === category);
  },

  getWod: function(name) {
    return wods.find((elem) => elem.title === name);
  },

  searchWods: function(str, category) {
    if (!str) return [];

    if (!category)
      return wods.filter((elem) => elem.title.includes(str));

    return this.getWods(category).filter((elem) => elem.title.includes(str));
  }
};