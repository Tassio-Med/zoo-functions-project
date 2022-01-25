const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  ids.map((id) => species.find((keys) => keys.id === id));

module.exports = getSpeciesByIds;
