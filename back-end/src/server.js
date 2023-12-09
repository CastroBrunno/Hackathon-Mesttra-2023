const server = require('./app');

const port = 3001;

server.listen(port, function () {
  console.log(`aplicação esta na porta ${port}`);
});