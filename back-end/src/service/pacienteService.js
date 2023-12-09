const { createUserModel, findLastId } = require("../model/pacienteModel")

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

module.exports = {
  createPacienteService
}