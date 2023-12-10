const { findVacinas, findIdade } = require("../model/VacinaModel")

const findVacinasServices = async () => {
    const vacinas = await findVacinas();
  
    return vacinas;
  }

  const findVacinaIdadeServices = async (mesAno, valor, tipo) => {
    const idades = await findIdade(mesAno, valor, tipo);
  
    return idades;
  }


  module.exports = {
    findVacinasServices,
    findVacinaIdadeServices
  }