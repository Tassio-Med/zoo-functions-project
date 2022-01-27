const data = require('../data/zoo_data');

const { employees, species } = data;

const getNames = (id) => species.find((specie) => specie.id === id).name;
const getLocalSpecies = (id) => species.find((specie) => specie.id === id).location;

function withoutParam() {
  const array = [];
  employees.forEach((each) => {
    array.push({
      id: each.id,
      fullName: `${each.firstName} ${each.lastName}`,
      species: each.responsibleFor.map((responsible) => getNames(responsible)),
      locations: each.responsibleFor.map((responsible) => getLocalSpecies(responsible)),
    });
  });
  return array;
}

function getEmployeesCoverage(obj) {
  if (typeof obj === 'undefined') {
    return withoutParam();
  }
  const employee = employees.find((employe) => employe
    .firstName === obj.name || employe.lastName === obj.name || employe.id === obj.id);

  if (typeof employee === 'undefined') {
    throw new Error('Informações inválidas');
  }
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((responsible) => getNames(responsible)),
    locations: employee.responsibleFor.map((responsible) => getLocalSpecies(responsible)),
  };
}

module.exports = getEmployeesCoverage;
