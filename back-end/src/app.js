const express = require('express');
const { json } = express;

const app = express();

app.use(json())

module.exports = app;