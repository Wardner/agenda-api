'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const { prefixRoutes } = config.server;

const app = express();

// Init Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get routes
const contact = require('./routes/contact');
const activity = require('./routes/activity');

// Define Routes
app.use(prefixRoutes, contact);
app.use(prefixRoutes, activity);

module.exports = app;
