const pool = require('../connection/pool');

const findVacinas = async () =>{
    const query = 'SELECT  vacina.*,  periodo_ano.*,  periodo_mes.*,  rede.* FROM  vacina full JOIN  periodoaplicacaoano AS periodo_ano ON vacina.Id_vacina = periodo_ano.Id_vacina full  join  periodoaplicacaomes AS periodo_mes ON vacina.Id_vacina = periodo_mes.Id_vacina full JOIN  rede AS rede ON vacina.Id_rede = rede.Id_rede;'

    const vacinas = await pool.query(query);

    return vacinas.rows;
}

const findIdade = async (mesAno, valor, tipo) => {

    if (mesAno == 'mes') {
        const query = `  SELECT * FROM public.vacina as vacinas  INNER JOIN public.periodoaplicacaomes as periodo_mes ON periodo_mes.id_vacina = vacinas.id_vacina  WHERE desc_meses = $1`;

        const consult = await pool.query(query, [valor]);

        return consult;
    }else if(mesAno == 'ano'){
        const query = `SELECT vacina.vacina, vacina.doenca_protecao, periodo_mes.qtd_meses_inicial, periodo_mes.qtd_meses_final, periodo_mes.desc_meses FROM vacina INNER JOIN periodoaplicacaomes AS periodo_mes`;

        const consult = await pool.query(query, [valor]);

        return consult;
    }else{
        console.log('error') //Vou mudar depois
    }
  
  
  }


module.exports = {
    findVacinas,
    findIdade
}