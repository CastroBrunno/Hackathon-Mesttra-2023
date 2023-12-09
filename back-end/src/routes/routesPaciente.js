const express = require('express');

const router = express.Router();

const {createPacienteController} = require('../controller/pacienteController.js');

router.post('/', createPacienteController);

module.exports = router;
