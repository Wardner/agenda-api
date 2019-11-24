'use strict'

const app = require('./app');
const config = require('./config');
const { port } = config.server;

// Database Connection
const databaseConnection = require('./database/databaseConnection');

databaseConnection.connect().then((connection) => 
connection && app.listen(port, () =>
  console.log(`Servidor corriendo en puerto ${port}`)));
