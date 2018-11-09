const mongoose = require('mongoose');

const mongoUri = 'mongodb://mongo:27017/airjordan';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

module.exports = db;
