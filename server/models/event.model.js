'use strict';

const mongoose = require('./index');
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  venue: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true,
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
