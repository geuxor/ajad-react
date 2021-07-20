'use strict';
require('dotenv').config(); //before router
const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');

app.use(cors());
app.use(express.json()); //bodyparser
app.use(router);

app.listen(process.env.PORT);
