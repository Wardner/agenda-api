'use strict'

const express = require('express');
const api = express.Router();

const ContactController = require('../controllers/contact');

api.route('/contactos/:id?')
  .post(ContactController.create)
  .get(ContactController.list)
  .put(ContactController.update)
  .delete(ContactController.remove);

module.exports = api;
