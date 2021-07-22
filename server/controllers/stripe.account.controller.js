'use strict';
// import { createStripeAccount, createStripeAccountLink } from '../ApiServices/stripe.account.api'
const { createStripeAccount, createStripeAccountLink } = require('../ApiServices/stripe.account.api');
const stripeAccountModel = require('../models/stripe.account.model');
const userID = { user_id: 'a1' }

function getStripeAccount(req, res) {
  const account = createStripeAccount(req, res)
  // console.log('stripecontroller', account, '\n', res.body);
}

function getStripeAccountLink(req, res) {
  const accountLink = createStripeAccountLink(req, res)
} 

async function postStripeAccountInfo(req, res) {
  console.log('postStripeAccountInfo', req.body);
  try {
    const dbdata = await stripeAccountModel.create(req.body);
    res.body = req.body;
    res.status(201).send(dbdata);
  } catch (err) {
    res.status(500).send(err);
  }
}
module.exports = { getStripeAccount, getStripeAccountLink, postStripeAccountInfo };
