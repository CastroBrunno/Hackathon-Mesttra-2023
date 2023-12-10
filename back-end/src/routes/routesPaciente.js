const express = require("express");

const router = express.Router();

const {
  createPacienteController,
  updatePacienteController,
  findAllPacienteController,
  findbyIdController,
} = require("../controller/pacienteController.js");

const {createPacienteController,
  updatePacienteController,
  findAllPacienteController,
  findbyIdController} = require('../controller/pacienteController.js');

router.post(
  "/",
  /*  #swagger.parameters['createPacienteController'] = {      
    in: 'body',
    type: 'object',
    required: true,
    '@schema': {
      properties: {
        id_paciente: {
          type: "integer",          
        },
        nome: {
          type: "string"
        },
        data_nascimento: {
          type: "date",          
        },
      },
      required: ["id_paciente", "nome", "data_nascimento",]
    },
  } */
  createPacienteController
);

router.put("/:id", updatePacienteController);

router.get("/", findAllPacienteController);

router.get("/:id", findbyIdController);

router.use(
  "/albuns",
  router
  // #swagger.name = 'createPacienteRouter-controller'
  // #swagger.description = 'createPaciente controller.'
  // #swagger.tags = ['createPacienteController']
);

module.exports = router;
