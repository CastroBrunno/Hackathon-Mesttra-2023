const pool = require('../connection/pool');

const createUserModel = async (idPaciente, nome, dataNascimento) => {

  const query = `INSERT INTO paciente (id_paciente, nome, Data_nascimento) VALUES ($1, $2, $3)`;

  const create = await pool.query(query, [idPaciente, nome, dataNascimento]);

  return create;
}

const findLastId = async () => {
  const query = 'SELECT MAX(id_paciente) FROM paciente';

  const idMax = await pool.query(query);

  return idMax.rows[0].max;
}

module.exports = {
  createUserModel,
  findLastId
}