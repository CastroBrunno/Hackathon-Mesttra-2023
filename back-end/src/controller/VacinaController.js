const { findVacinasServices,
  findVacinaIdadeServices,
  findVacinaPacienteServices,
  findByProtecaoService } = require("../service/VacinaService");

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

const findByProtecaoController = async (req, res) => {
  const { protecao } = req.body;  

    try{
      const consulta = await findByProtecaoService(protecao);
      res.status(200).json(consulta);
    }
    catch (error) {
      console.log (error);
      res.status(404).json({mensagem: 'erro ao executar a consulta.'});
    }
  }

  module.exports = {
    findVacinasController,
    findVacinasIdadeController,
    findVacinasPacienteController,
    findByProtecaoController
  }