const { createUserModel } = require("../model/pacienteModel")

const createPacienteService = async (nome, dataNascimento) => {
  // const newDate = new Date(`${dataNascimento[2]}-${dataNascimento[1]}-${dataNascimento[0]}`);

  const create = await createUserModel(nome, dataNascimento);

  return create;
}

module.exports = {
  createPacienteService
}