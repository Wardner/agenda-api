const sql = require('mssql');

const databaseConnection = require('../databaseConnection');
const { activities } = require('../tables');

const queryActivity = {
    create: async(activity) =>
        databaseConnection.connection
        .request()
        .input('titulo', sql.VarChar(40), activity.titulo)
        .input('ubicacion', sql.VarChar(25), activity.ubicacion)
        .input('fecha', sql.Date, activity.fecha)
        .input('descripcion', sql.VarChar(60), activity.descripcion)
        .query(`INSERT INTO ${activities}(titulo, ubicacion, fecha, descripcion)
      VALUES (@titulo,@ubicacion,@fecha,@descripcion)`),

    list: async() =>
        databaseConnection.connection
        .request()
        .query(`SELECT * FROM ${activities}`),

    update: async({ activity, id }) =>
        databaseConnection.connection
        .request()
        .input('id', sql.Int, id)
        .input('titulo', sql.VarChar(40), activity.titulo)
        .input('ubicacion', sql.VarChar(25), activity.ubicacion)
        .input('fecha', sql.Date, activity.fecha)
        .input('descripcion', sql.VarChar(60), activity.descripcion)
        .query(`UPDATE ${activities} SET titulo=@titulo,ubicacion=@ubicacion,fecha=@fecha,descripcion=@descripcion
      WHERE id = @id`),

    get: async({ id }) =>
        databaseConnection.connection
        .request()
        .input('id', sql.Int, id)
        .query(`SELECT TOP 1 * FROM ${activities} WHERE id = @id`),

    delete: async({ id }) =>
        databaseConnection.connection
        .request()
        .input('id', sql.Int, id)
        .query(`DELETE FROM ${activities} WHERE id = @id`),
}

module.exports = queryActivity;