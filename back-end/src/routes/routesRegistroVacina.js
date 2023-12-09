const express = require('express');
const { findAllRegistroController } = require('../controller/registroVacinaController');

const router = express.Router();

router.get('/', findAllRegistroController);

module.exports = router;