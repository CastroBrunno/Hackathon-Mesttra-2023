const { findVacinasServices } = require("../service/VacinaService");

const findVacinasController = async (req, res) => {
    const vacinas = await findVacinasServices();
  
    return res.status(200).json(vacinas);
  }

  module.exports = {
    findVacinasController
  }