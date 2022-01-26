const data = require('../data/zoo_data');

// Toda essa questão foi resolvida com ajuda das monitorias
const { species } = data;

function countAnimals(animal) {
  const newObj = {};
  if (!animal) {
    species.forEach((specie) => {
      newObj[specie.name] = specie.residents.length;
    });
    return newObj;
  }
  if (!animal.sex) {
    const findSpecie = species
      .find((specie) => specie.name === animal.specie);
    return findSpecie.residents.length;
  }
  const quantity = species
    .find((specie) => specie.name === animal.specie)
    .residents.filter((obj) => obj.sex === animal.sex);
  return quantity.length;
}

module.exports = countAnimals;
