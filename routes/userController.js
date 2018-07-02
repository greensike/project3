var express = require('express');
var router = express.Router();

const { User } = require('../db/userSchema.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find().then((user) => {
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

router.post('/', async (req, res) => {
  try {
    const newUser = req.body
    const savedUser= await User.create(newUser)
    res.json(savedUser)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id
    const updatedUser = req.body
    const savedUser = await User.findByIdAndUpdate(userId, updatedUser)
    res.json(savedUser)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id
    await User.findByIdAndRemove(userId)
    res.json({
      msg: 'Successfully Deleted'
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router;
