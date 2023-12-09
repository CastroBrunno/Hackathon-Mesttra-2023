const pool = require('../connection/pool');

const findVacinas = async (idVacina) =>{
    const query = 'SELECT * FROM vacina'

    const vacinas = await pool.query(query);

    return vacinas;
}

module.exports = {
    findVacinas
}