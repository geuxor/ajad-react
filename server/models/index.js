const mongoose = require('mongoose');
console.log('trying to connect to db');
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
