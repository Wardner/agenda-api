'use strict'

const express = require('express');
const api = express.Router();

const ActivityController = require('../controllers/activity');

api.route('/actividades/:id?')
  .post(ActivityController.create)
  .get(ActivityController.list)
  .put(ActivityController.update)
  .delete(ActivityController.remove);

module.exports = api;
