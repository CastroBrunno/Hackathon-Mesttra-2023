const express = require('express');
const routesPaciente = require('./routes/routesPaciente');
const routesVacina = require('./routes/routesVacina');
const routesRegistroVacina = require('./routes/routesRegistroVacina');

const app = express();

app.use(express.json());

app.use('/paciente', routesPaciente);
app.get('/', (req, res) => res.status(200).json('ok'))
app.use('/vacinas', routesVacina);
app.use('/registro-vacina', routesRegistroVacina)



module.exports = app;
