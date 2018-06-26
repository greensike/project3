const mongoose = require('mongoose')
const Schema = mongoose.Schema

const creepSchema = new Schema({
    name: String,
    photo: String,
    address: String,
    age: Number,
    description: String,
    crime: String,
    stars: String
  })

  const Creep = mongoose.model('Creep', creepSchema)

module.exports = {
  creepSchema,
  Creep
}