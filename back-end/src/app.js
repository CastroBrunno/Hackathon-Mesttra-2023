const express = require('express');
const routesPaciente = require('./routes/routesPaciente');

const app = express();

app.use(express.json());

app.use('/paciente', routesPaciente);
app.get('/', (req, res) => res.status(200).json('ok'))

module.exports = app;