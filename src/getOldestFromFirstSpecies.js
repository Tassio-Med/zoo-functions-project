const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((object) => object.id === id).responsibleFor[0];
  const firstAnimal = species.find((specie) => specie.id === animalId).residents;
  const older = firstAnimal.sort((a, b) => b.age - a.age);
  return Object.values(older[0]);
}

module.exports = getOldestFromFirstSpecies;
