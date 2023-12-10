const express = require('express');

const router = express.Router();

const { findVacinasController,
  findVacinasIdadeController,
  findVacinasPacienteController,
  findByProtecaoController } = require('../controller/VacinaController');

router.get('/', findVacinasController);

router.get('/idade', findVacinasIdadeController);

router.get('/paciente', findVacinasPacienteController);

router.get('/protecao', findByProtecaoController);


module.exports = router;