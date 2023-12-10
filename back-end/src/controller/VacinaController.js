const { findVacinasServices, findVacinaIdadeServices, findVacinaPacienteServices } = require("../service/VacinaService");

const findVacinasController = async (req, res) => {
    const vacinas = await findVacinasServices();
  
    return res.status(302).json(vacinas);
  }

  const findVacinasIdadeController = async (req, res) => {
    const { mesAno, valor, tipo } = req.body;

    const idades = await findVacinaIdadeServices(mesAno, valor, tipo);
  
    return res.status(302).json(idades);
  }


  const findVacinasPacienteController = async (req, res) => {
    const {nome} = req.body;

    const paciente = await findVacinaPacienteServices(nome);
  
    return res.status(302).json(paciente);
  }

  module.exports = {
    findVacinasController,
    findVacinasIdadeController,
    findVacinasPacienteController
  }