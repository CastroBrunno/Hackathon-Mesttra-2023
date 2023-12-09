const pool = require('../connection/pool');

const findAll = async () => {
  const query = 'SELECT * FROM vacinaaplicada';

  const vacinasAplicadas = await pool.query(query);

  return vacinasAplicadas.rows;
}

module.exports = {
  findAll
}