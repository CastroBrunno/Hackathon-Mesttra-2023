const express = require('express');

const router = express.Router();

const {createPacienteController, updatePacienteController, findAllPacienteController} = require('../controller/pacienteController.js');

router.post('/', createPacienteController);

router.put('/:id', updatePacienteController);

router.get('/', findAllPacienteController)

module.exports = router;
