const { findAllRegistroService } = require("../service/registroVacinaService")

const findAllRegistroController = async (req, res) => {
  const registroVacinas = await findAllRegistroService();

  return res.status(200).json(registroVacinas);
}

module.exports = {
  findAllRegistroController
}