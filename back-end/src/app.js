const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use(express.json())
app.use('/paciente', routes);
app.get('/', (req, res) => res.status(200).json('ok'))

module.exports = app;