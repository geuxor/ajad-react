'use strict';

const mongoose = require('./index');
const { Schema } = mongoose;

const StripeAccountSchema = new Schema({
  userID: {
    type: String,
    require: true
  },
  accountID: {
    type: String,
    require: true
  }
});

const StripeAccount = mongoose.model('stripeaccount', StripeAccountSchema);

module.exports = StripeAccount;
