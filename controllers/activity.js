'use strict'

const Activity = require('../database/models/activity');
const repository = require('../database/repository/activity');

const create = async (req, res) => {
  try {
    const actividad = new Activity(req.body);
    const saved = await repository.create(actividad);
    if (saved.rowsAffected)
      return res
        .status(201)
        .send({
          actividad,
          msg: 'Se ha agregado una nueva actividad.'
        });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

const list = async (req, res) => {
  try {
    const actividades = await repository.list();
    if (actividades.recordset)
      return res
        .status(200)
        .send({ actividades: actividades.recordset });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

const update = async (req, res) => {
  try {
    const activity = new Activity(req.body);
    const updated = await repository.update({ activity, id: req.params.id });
    if (updated.rowsAffected) {
      const getActivity = await repository.get({ id: req.params.id });
      return res
        .status(200)
        .send({
          actividad: getActivity.recordset,
          msg: 'Se ha actualizado esta actividad.'
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
        .send({ msg: 'Se ha eliminado esta actividad.' });
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
