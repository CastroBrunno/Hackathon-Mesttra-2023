const { findAllRegistroService, createRegistroVacinaService, deleteRegisterService } = require("../service/registroVacinaService")

const findAllRegistroController = async (req, res) => {
  const registroVacinas = await findAllRegistroService();

  return res.status(200).json(registroVacinas);
}

const createRegistroVacinaController = async (req, res) => {
  const { idPaciente, idVacina, data } = req.body;

  const { code, message } = await createRegistroVacinaService(idPaciente, idVacina, data);

  return res.status(code).json({message});
}

const deleteRegisterController = async (req, res) => {
  const { idPaciente, idVacina, data } = req.body;

  const {code, message} = await deleteRegisterService(idPaciente, idVacina, data);

  return res.status(code).json({message});
}

module.exports = {
  findAllRegistroController,
  createRegistroVacinaController,
  deleteRegisterController
}