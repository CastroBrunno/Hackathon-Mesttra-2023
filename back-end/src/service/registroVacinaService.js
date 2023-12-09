const { findAll, createRegister, deleteRegister } = require("../model/registroVacinaModel")

const findAllRegistroService = async () => {
  const vacinasRegistradas = await findAll();

  return vacinasRegistradas;
}

const createRegistroVacinaService = async (idPaciente, idVacina, data) => {
  try {
    const newDate = new Date(`${data[2]}-${data[1]}-${data[0]}`);

    await createRegister(idPaciente, idVacina, newDate);
    
    return { code: 201, message: 'Registro criado com sucesso' };
  } catch(erro) {
    return { code: 500, message: erro.message };
  }
}

const deleteRegisterService = async (idPaciente, idVacina, data) =>{

  try {

    const newDate = new Date(`${data[2]}-${data[1]}-${data[0]}`);
    await deleteRegister(idPaciente, idVacina, newDate)

    return {code: 204, message:'Usuário deletado com sucesso'}
  } catch (error) {
    return { code: 500, message: error.message };
  }
}

module.exports = {
  findAllRegistroService,
  createRegistroVacinaService,
  deleteRegisterService
}