const pool = require('../connection/pool');

const findAll = async () => {
  const query = 'SELECT * FROM vacinaaplicada';

  const vacinasAplicadas = await pool.query(query);

  return vacinasAplicadas.rows;
}

const createRegister = async (idPaciente, idVacina, data) => {
  const query = 'INSERT INTO vacinaaplicada (Id_paciente, Id_vacina, Data_aplicacao) VALUES ($1, $2, $3)';

  const create = await pool.query(query, [idPaciente, idVacina, data]);

  return create;
}

module.exports = {
  findAll,
  createRegister
}