const data = require('../data/zoo_data');
const { species } = data;

function countAnimals(...animal) {
  const newObj = {};
  if (!animal[0]) {
    species.forEach((each) => {
      newObj[each.name] = species
        .filter((single) => single.name === each.name)[0].residents.length;
    });
    return newObj;
  }
  const { specie, sex } = animal[0];
  if (Object.keys(...animal).length === 1) {
    return species.filter((single) => single.name === specie)[0].residents.length;
  }

  return species
    .filter((single) => single.name === specie)[0].residents
    .filter((unique) => unique.sex === sex).length;
}

module.exports = countAnimals;
