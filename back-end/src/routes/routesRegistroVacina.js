const express = require('express');
const { findAllRegistroController, createRegistroVacinaController, deleteRegisterController } = require('../controller/registroVacinaController');
const { validaCamposRegistro } = require('../middlewares/validacoesRegistroVacina');

const router = express.Router();

router.get('/', findAllRegistroController);


router.post(
    '/',
    validaCamposRegistro, 
    
    createRegistroVacinaController
    /*  #swagger.parameters['createRegistroVacina'] = {      
        in: 'body',
        type: 'object',
        required: true,
        '@schema': {
          properties: {
            id_paciente: {
              type: "integer",          
            },
            id_vacina: {
              type: "integer",
            },
            data_aplicacao: {
              type: "date",          
            },
          },
          required: ["id_paciente", "id_vacina", "data_aplicacao",]
        },
    } */
);


router.delete('/', validaCamposRegistro,  deleteRegisterController);

module.exports = router;