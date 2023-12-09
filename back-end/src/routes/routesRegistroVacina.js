const express = require('express');
const { findAllRegistroController, createRegistroVacinaController } = require('../controller/registroVacinaController');

const router = express.Router();

router.get('/', findAllRegistroController);
router.post('/', createRegistroVacinaController);

module.exports = router;