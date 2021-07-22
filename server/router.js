'use strict';
const express = require('express');
const router = express.Router();
const eventController = require('./controllers/event.controller');
const stripeController = require('./controllers/stripe.account.controller')

console.log('entering router');

router.get('/stripe/account', stripeController.getStripeAccount)
router.post('/stripe/accountlink', stripeController.getStripeAccountLink)
router.post('/stripe/accountdata', stripeController.postStripeAccountInfo)
router.get('/events', eventController.getEvents);
router.post('/events', eventController.postEvent);

module.exports = router;
