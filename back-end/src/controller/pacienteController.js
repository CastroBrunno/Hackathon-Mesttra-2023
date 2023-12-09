const { createPacienteService } = require("../service/pacienteService");

const createPacienteController = async (req, res) => {
  const { nome, dataNascimento } = req.body;

  const paciente = await createPacienteService(nome, dataNascimento);

  return res.status(201).json({ paciente });
}

module.exports = {
  createPacienteController
}