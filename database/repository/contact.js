const sql = require('mssql');

const databaseConnection = require('../databaseConnection');
const { contacts } = require('../tables');

const queryContact = {
  create: async (contact) =>
    databaseConnection.connection
      .request()
      .input('nombre', sql.VarChar(20), contact.nombre)
      .input('apellido', sql.VarChar(20), contact.apellido)
      .input('telefono', sql.VarChar(20), contact.telefono)
      .input('correo', sql.VarChar(30), contact.correo)
      .input('fecha_nacimiento', sql.Date, contact.fecha_nacimiento)
      .query(`INSERT INTO ${contacts}(nombre, apellido, telefono, correo, fecha_nacimiento)
      VALUES (@nombre,@apellido,@telefono,@correo,@fecha_nacimiento)`),

  list: async () =>
    databaseConnection.connection
      .request()
      .query(`SELECT * FROM ${contacts}`),

  update: async ({ contact, id }) =>
    databaseConnection.connection
      .request()
      .input('id', sql.Int, id)
      .input('nombre', sql.VarChar(20), contact.nombre)
      .input('apellido', sql.VarChar(20), contact.apellido)
      .input('telefono', sql.VarChar(20), contact.telefono)
      .input('correo', sql.VarChar(30), contact.correo)
      .input('fecha_nacimiento', sql.Date, contact.fecha_nacimiento)
      .query(`UPDATE ${contacts} SET nombre=@nombre,apellido=@apellido,telefono=@telefono,correo=@correo,fecha_nacimiento=@fecha_nacimiento
      WHERE id = @id`),
  
  get: async ({ id }) =>
    databaseConnection.connection
      .request()
      .input('id', sql.Int, id)
      .query(`SELECT TOP 1 * FROM ${contacts} WHERE id = @id`),

  delete: async ({ id }) =>
    databaseConnection.connection
      .request()
      .input('id', sql.Int, id)
      .query(`DELETE FROM ${contacts} WHERE id = @id`),
}

module.exports = queryContact;
