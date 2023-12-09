const { findAll } = require("../model/registroVacinaModel")

const findAllRegistroService = async () => {
  const vacinasRegistradas = await findAll();

  return vacinasRegistradas;
}

module.exports = {
  findAllRegistroService
}