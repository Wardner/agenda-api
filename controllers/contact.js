'use strict'

const Contact = require('../database/models/contact');
const repository = require('../database/repository/contact');

const create = async (req, res) => {
  try {
    const contacto = new Contact(req.body);
    const saved = await repository.create(contacto);
    if (saved.rowsAffected)
      return res
        .status(201)
        .send({
          contacto,
          msg: 'Se ha agregado un nuevo contacto.'
        });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

const list = async (req, res) => {
  try {
    const contactos = await repository.list();
    if (contactos.recordset)
      return res
        .status(200)
        .send({ contactos: contactos.recordset });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

const update = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const updated = await repository.update({ contact, id: req.params.id });
    if (updated.rowsAffected) {
      const getContact = await repository.get({ id: req.params.id });
      return res
        .status(200)
        .send({
          contacto: getContact.recordset,
          msg: 'Se ha actualizado este contacto.'
        });
    }
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

const remove = async (req, res) => {
  try {
    const deleted = await repository.delete({ id: req.params.id });
    if (deleted)
      return res
        .status(200)
        .send({ msg: 'Se ha eliminado este contacto.' });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

module.exports = {
  create,
  list,
  update,
  remove
}
