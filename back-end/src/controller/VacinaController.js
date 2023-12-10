const { findVacinasServices, findVacinaIdadeServices, } = require("../service/VacinaService");

const findVacinasController = async (req, res) => {
    const vacinas = await findVacinasServices();
  
    return res.status(302).json(vacinas);
  }

  const findVacinasIdadeController = async (req, res) => {
    const { mesAno, valor, tipo } = req.body;

    const idades = await findVacinaIdadeServices(mesAno, valor, tipo);
  
    return res.status(302).json(idades);
  }

  module.exports = {
    findVacinasController,
    findVacinasIdadeController
  }