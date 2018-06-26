var express = require('express');
var router = express.Router();

const { User } = require('../db/userSchema.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find().then((user) => {
    console.log(creatures)
    res.json(creatures)
  }).catch((err) => {
    console.log(err)
  })
})

module.exports = router;
