const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalName = species.find((specie) => specie.name === animal);
  return animalName.residents.every((res) => res.age >= age);
}

module.exports = getAnimalsOlderThan;
