const express = require('express');

const router = express.Router();

const { findVacinasController,findVacinasIdadeController, findVacinasPacienteController } = require('../controller/VacinaController');

router.get('/', findVacinasController);

router.get('/idade', findVacinasIdadeController);

router.get('/paciente', findVacinasPacienteController);


module.exports = router;