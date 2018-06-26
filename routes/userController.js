var express = require('express');
var router = express.Router();

const { User } = require('../db/userSchema.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find().then((user) => {
    // console.log(creatures)
    res.json(user)
  }).catch((err) => {
    console.log(err)
  })
})

router.get('/:id', (req, res) => {
  const userId = req.params.id
  User.findById(userId)
      .then((user) => {
          res.json(user)
      })
      .catch((error) => {
      })
})

module.exports = router;
