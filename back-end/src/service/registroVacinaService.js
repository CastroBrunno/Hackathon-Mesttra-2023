const { findAll, createRegister } = require("../model/registroVacinaModel")

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

module.exports = {
  findAllRegistroService,
  createRegistroVacinaService
}