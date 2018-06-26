require('dotenv').config();
const mongoose = require('mongoose');
const {Creature} = require('./schema.js')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;