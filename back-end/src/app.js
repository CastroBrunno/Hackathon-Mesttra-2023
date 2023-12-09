const express = require('express');
const routesPaciente = require('./routes/routesPaciente');
const routesRegistroVacina = require('./routes/routesRegistroVacina');

const app = express();

app.use(express.json());

app.use('/paciente', routesPaciente);
app.get('/', (req, res) => res.status(200).json('ok'))
app.use('/registro-vacina', routesRegistroVacina)

module.exports = app;