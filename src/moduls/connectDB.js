const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URI || 'mongodb://localhost:27017';


module.exports = () => mongoose.connect(mongoURL);