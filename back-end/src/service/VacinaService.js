const { findVacinas } = require("../model/VacinaModel")

const findVacinasServices = async () => {
    const vacinas = await findVacinas();
  
    return vacinas;
  }

  module.exports = {
    findVacinasServices
  }