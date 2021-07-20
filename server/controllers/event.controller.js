'use strict';
const eventModel = require('../models/event.model');

async function getEvents (req, res) {
  try {
    const dbEvents = await eventModel.find();
    res.status(200).send(dbEvents);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function postEvent (req, res) {
  console.log(req.body);
  
  try {
    const event = await eventModel.create(req.body);
    res.body = req.body;
    res.status(201).send(event);
  } catch (err) {
    res.status(500).send(err);
  }
}
module.exports = { getEvents, postEvent };
