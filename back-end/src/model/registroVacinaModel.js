const pool = require('../connection/pool');

const findAll = async () => {
  const query = 'SELECT * FROM vacinaaplicada';

  const vacinasAplicadas = await pool.query(query);

  return vacinasAplicadas.rows;
}

const findUnique = async (idPaciente, idVacina, data) => {
  const query = 'SELECT * FROM paciente WHERE Id_paciente = $1 AND Id_paciente = $2 AND Data_aplicacao = $3';

  const find = await pool.query(query, [idPaciente, idVacina, data]);

  return find.rows;
}

const createRegister = async (idPaciente, idVacina, data) => {
  const query = 'INSERT INTO vacinaaplicada (Id_paciente, Id_vacina, Data_aplicacao) VALUES ($1, $2, $3)';

  const create = await pool.query(query, [idPaciente, idVacina, data]);

  return create;
}

const deleteRegister = async (idPaciente, idVacina, data) =>{
  const query = 'DELETE FROM vacinaaplicada WHERE Id_paciente = $1 AND Id_vacina = $2 AND Data_aplicacao = $3';

  const remove = await pool.query(query, [idPaciente, idVacina, data]);

  return remove;
}

module.exports = {
  findAll,
  createRegister,
  deleteRegister,
  findUnique
}

