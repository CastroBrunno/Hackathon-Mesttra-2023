const express = require('express');

const router = express.Router();

const {createPacienteController, updatePacienteController, findAllPacienteController, findbyIdController} = require('../controller/pacienteController.js');

router.post('/', createPacienteController);

router.put('/:id', updatePacienteController);

router.get('/', findAllPacienteController);

router.get('/:id', findbyIdController)

module.exports = router;
