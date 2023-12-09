const express = require('express');
const { findAllRegistroController, createRegistroVacinaController, deleteRegisterController } = require('../controller/registroVacinaController');
const { validaCamposRegistro } = require('../middlewares/validacoesRegistroVacina');

const router = express.Router();

router.get('/', findAllRegistroController);
router.post('/', validaCamposRegistro, createRegistroVacinaController);
router.delete('/', validaCamposRegistro,  deleteRegisterController);

module.exports = router;