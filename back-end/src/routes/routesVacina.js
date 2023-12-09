const express = require('express');

const router = express.Router();

const {findVacinasController} = require('../controller/VacinaController');

router.get('/', findVacinasController);


module.exports = router;