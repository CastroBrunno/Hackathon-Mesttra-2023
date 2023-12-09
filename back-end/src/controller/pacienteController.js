const { createPacienteService } = require("../service/pacienteService");

const createPacienteController = async (req, res) => {
  const { nome, dataNascimento } = req.body;

  const {code, message} = await createPacienteService(nome, dataNascimento);

  return res.status(code).json({ message });
}

module.exports = {
  createPacienteController
}