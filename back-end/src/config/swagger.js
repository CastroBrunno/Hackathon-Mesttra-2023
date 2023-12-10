
const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
      title: 'Carteira Digital de Vacinação',
      description: 'Metodos POST',
    },
    host: 'localhost:3001',
    schemes: ['http'],
  };
  
const outputFile = "swagger_output.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);

