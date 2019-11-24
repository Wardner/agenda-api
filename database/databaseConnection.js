const sql = require('mssql');
const config = require('../config');
 
const databaseConnection = {
  connection: undefined,
  connect: async () => {
    try {
      databaseConnection.connection = !databaseConnection.connection ?
        await sql.connect(config.connection) : databaseConnection.connection;

      if (databaseConnection.connection)
        console.log('Base de datos conectada...');
        return databaseConnection.connection;
    } catch (err) {
      console.error('Error conectando a la base de datos,', err);
    }
  }
};

module.exports = databaseConnection;
