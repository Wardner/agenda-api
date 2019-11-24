'use strict'

const create = async (req, res) => { 
  try {

  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

const list = async (req, res) => {
  try {

  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

const update = async (req, res) => {
  try {

  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

const remove = async (req, res) => {
  try {
      
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
