const validaCamposRegistro = (req, res, next) => {
  const { idPaciente, idVacina, data } = req.body;

  if (!idPaciente || !idVacina || !data) {
    return res.status(400).json({ message: 'O corpo da solicitação está incompleto' });
  }

  return next();
}

module.exports = {
  validaCamposRegistro
}