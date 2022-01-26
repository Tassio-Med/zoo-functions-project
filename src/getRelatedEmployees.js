const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

const message = 'O id inserido não é de uma pessoa colaboradora gerente!';

function isManager(id) {
  return employees.some((worker) =>
    worker.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const ifIsManager = employees.filter((worker) => worker.managers.includes(managerId));
    return ifIsManager.map((nome) => `${nome.firstName} ${nome.lastName}`);
  } throw new Error(message);
}

module.exports = { isManager, getRelatedEmployees };
