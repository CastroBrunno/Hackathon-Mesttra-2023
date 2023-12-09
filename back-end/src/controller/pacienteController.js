const { createPacienteService, updatePacienteService, findAllPacienteService } = require("../service/pacienteService");

const createPacienteController = async (req, res) => {
  const { nome, dataNascimento } = req.body;

  const {code, message} = await createPacienteService(nome, dataNascimento);

  return res.status(code).json({ message });
}

const updatePacienteController = async (req, res) => {
  const { nome, dataNascimento } = req.body;
  const { id } = req.params;

  const update = await updatePacienteService(id, nome, dataNascimento);

  res.status(200).json(update)

}

const findAllPacienteController = async (req, res) => {
  const pacientes = await findAllPacienteService();

  return res.status(200).json(pacientes)
}
module.exports = {
  createPacienteController,
  updatePacienteController,
  findAllPacienteController
}