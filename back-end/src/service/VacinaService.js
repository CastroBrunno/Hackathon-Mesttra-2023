const { findVacinas,
  findIdade,
  findPacientes,
  findByProtecao } = require("../model/VacinaModel")

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

const findByProtecaoService = async (protecao) => {
  const vacinaProteção = await findByProtecao(protecao);

  return vacinaProteção;
}


module.exports = {
  findVacinasServices,
  findVacinaIdadeServices,
  findVacinaPacienteServices,
  findByProtecaoService
}