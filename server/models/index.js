const mongoose = require('mongoose');

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
