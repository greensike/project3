const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {creepSchema} = require('./creepSchema')

const userSchema = new Schema({
    name: String,
    photo: String,
    creeps: [creepSchema]
  })

const User = mongoose.model('User', userSchema)

module.exports = {
  userSchema,
  User
}