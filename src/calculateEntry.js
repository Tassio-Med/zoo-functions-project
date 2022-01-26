const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  if (entrants.length > 0) {
    const child = entrants.filter((element) => element.age < 18).length;
    const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
    const senior = entrants.filter((element) => element.age >= 50).length;

    const obj = {
      child,
      adult,
      senior,
    };
    return obj;
  }
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entries = countEntrants(entrants);
  let totalValue = 0;
  totalValue += prices.child * entries.child;
  totalValue += prices.adult * entries.adult;
  totalValue += prices.senior * entries.senior;
  return totalValue;
}

module.exports = { calculateEntry, countEntrants };
