require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/userController');
const creepRouter = require('./routes/creepController');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv').config();
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGODB_URI);  

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const db = mongoose.connection
db.on('error', (error) => {
    console.log(error)
    console.log('you messed up')
  })
  db.once('open', () => {
    console.log('Connected to MongoDB!')
  })

app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/user/:userId/creep', creepRouter)
app.use(express.static(`${__dirname}/client/build`))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('App is up and running on port ' + PORT)
  })

module.exports = app;
