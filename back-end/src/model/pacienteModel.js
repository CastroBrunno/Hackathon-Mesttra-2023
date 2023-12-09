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

const update = async (id, nome, dataNascimento) => {
  const query = 'UPDATE paciente SET nome = $1, Data_nascimento = $2 WHERE id_paciente = $3'

  const update = await pool.query(query, [nome, dataNascimento, id]);

  return update;
}

const findAllPacientes = async () => {
  const query = 'SELECT * FROM paciente';

  const pacientes = await pool.query(query);

  return pacientes.rows;
}

const findbyId = async (id) => {
  const query = 'SELECT * FROM paciente WHERE id_paciente = $1';

  const paciente = await pool.query(query, [id]);

  return paciente.rows[0];
}

module.exports = {
  createUserModel,
  findLastId,
  update,
  findAllPacientes,
  findbyId
}