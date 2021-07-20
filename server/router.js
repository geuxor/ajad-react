'use strict';
const express = require('express');
const router = express.Router();
const eventController = require('./controllers/event.controller');

router.get('/events', eventController.getEvents);
router.post('/events', eventController.postEvent);

module.exports = router;
