const express = require("express");
const routesPaciente = require("./routes/routesPaciente");
const routesRegistroVacina = require("./routes/routesRegistroVacina");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const app = express();

app.use(express.json());

app.use("/paciente", routesPaciente);
app.get("/", (req, res) => res.status(200).json("ok"));
app.use("/registro-vacina", routesRegistroVacina);

module.exports = app;
