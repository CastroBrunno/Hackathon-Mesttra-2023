const express = require('express');

const router = express.Router();

const { findVacinasController,findVacinasIdadeController } = require('../controller/VacinaController');

router.get('/', findVacinasController);

router.get('/idade', findVacinasIdadeController);




module.exports = router;