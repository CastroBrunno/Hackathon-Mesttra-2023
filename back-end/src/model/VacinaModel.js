const pool = require('../connection/pool');

const findVacinas = async () =>{
    const query = 'SELECT  vacina.*,  periodo_ano.*,  periodo_mes.*,  rede.* FROM  vacina full JOIN  periodoaplicacaoano AS periodo_ano ON vacina.Id_vacina = periodo_ano.Id_vacina full  join  periodoaplicacaomes AS periodo_mes ON vacina.Id_vacina = periodo_mes.Id_vacina full JOIN  rede AS rede ON vacina.Id_rede = rede.Id_rede;'

    const vacinas = await pool.query(query);

    return vacinas.rows;
}

module.exports = {
    findVacinas
}