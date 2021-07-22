'use strict';
// import Stripe from "stripe";
// require('dotenv').config(); //before router

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const testaccoundid = 'acct_1JFhsVPJo0Fe4c2i'

async function createStripeAccount(req, res) {
  console.log('entering stripe api - createStripeAccount');
  try {
    const account = await stripe.accounts.create({
      country: 'DK',
      type: "express",
      capabilities: {
        card_payments: {
          requested: true,
        },
        transfers: {
          requested: true,
        }
      }
    });
    console.log(account.id, '\n', account.external_accounts.url, '\n', account.login_links);
    res.status(200).send(account);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function createStripeAccountLink(req, res) {
  console.log('entering stripe api - createStripeAccountLink');
  const newid = req.body.id
  console.log(typeof newid, typeof gaccountid);
  try {
    const accountLink = await stripe.accountLinks.create({
      account: req.body.id, //testaccoundid
      refresh_url: 'http://localhost:3000/events',
      return_url: 'http://localhost:3000/events',
      type: 'account_onboarding',
    })
    console.log('accountLink', accountLink.url);
    res.status(200).send(accountLink);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { createStripeAccount, createStripeAccountLink }
