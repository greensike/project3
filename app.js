require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv').config();
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGODB_URI);  

const db = mongoose.connection
db.on('error', (error) => {
    console.log(error)
    console.log('you messed up')
  })
  db.once('open', () => {
    console.log('Connected to MongoDB!')
  })

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/', (req,res) => {
    res.send("Hello World")
})

module.exports = app;
