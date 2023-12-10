const { findVacinas, findIdade, findPacientes } = require("../model/VacinaModel")

const findVacinasServices = async () => {
  const vacinas = await findVacinas();

  return vacinas;
}

const findVacinaIdadeServices = async (mesAno, valor, tipo) => {
  const idades = await findIdade(mesAno, valor, tipo);

  return idades;
}

const findVacinaPacienteServices = async (nome) => {
  const paciente = await findPacientes(nome);

  return paciente;
}


module.exports = {
  findVacinasServices,
  findVacinaIdadeServices,
  findVacinaPacienteServices
}