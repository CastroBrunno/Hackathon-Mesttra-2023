const { createUserModel, findLastId, update, findAllPacientes } = require("../model/pacienteModel")

const createPacienteService = async (nome, dataNascimento) => {
  try {
    const newDate = new Date(`${dataNascimento[2]}-${dataNascimento[1]}-${dataNascimento[0]}`);

    const idPaciente = await findLastId() + 1;
  
    await createUserModel(idPaciente, nome, newDate);
  
    return {code: 201, message: 'Usuário criado com sucesso'};
  } catch {
    return { code: 500, message: 'Erro interno do servidor' };
  }
}

const updatePacienteService = async (id, nome, dataNascimento) => {
  const updatePaciente = update(id, nome, dataNascimento);

  return updatePaciente;
}

const findAllPacienteService = async () => {
  const pacientes = await findAllPacientes();

  return pacientes;
}

module.exports = {
  createPacienteService,
  updatePacienteService,
  findAllPacienteService
}