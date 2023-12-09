const pool = require('../connection/pool');

const createUserModel = async (nome, dataNascimento) => {

  const query = `INSERT INTO paciente (nome, Data_nascimento) VALUES ($1, $2)`;

  const create = await pool.query(query, [nome, dataNascimento]);

  return create;
}

module.exports = {
  createUserModel
}