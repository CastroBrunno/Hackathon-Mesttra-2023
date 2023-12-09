const express = require('express');
const routesPaciente = require('./routes/routesPaciente');
const routesVacina = require('./routes/routesVacina');

const app = express();

app.use(express.json());

app.use('/paciente', routesPaciente);
app.get('/', (req, res) => res.status(200).json('ok'))
app.use('/vacinas', routesVacina)

module.exports = app;





// const express = require('express');
// const routesPaciente = require('./routes/routesPaciente');

// const app = express();

// app.use(express.json());

// app.use('/paciente', routesPaciente);
// app.get('/', (req, res) => res.status(200).json('ok'));

// module.exports = app;