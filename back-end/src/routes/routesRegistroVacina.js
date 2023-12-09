const express = require('express');
const { findAllRegistroController, createRegistroVacinaController, deleteRegisterController } = require('../controller/registroVacinaController');

const router = express.Router();

router.get('/', findAllRegistroController);
router.post('/', createRegistroVacinaController);
router.delete('/', deleteRegisterController);

module.exports = router;