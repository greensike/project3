require('dotenv').config();
const mongoose = require('mongoose');
const {User} = require('./userSchema.js')
const {Creep} = require('./creepSchema.js')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;

const saved = async () => {
    await User.remove()
    const John = new User({name: 'John', photo: 'enter photo source here'})
    await John.save()
    const Sarah = new User({name: 'Sarah', photo: 'enter photo source here'})
    await Sarah.save()
    const Quagmire = new Creep({name: 'Quagmire', photo: 'enter photo source here', address: '123 Rhode Island', age: 34, description: 'weird ole giggidy giggidy', stars: '4'})
    await Quagmire.save()
    const RedGuy = new Creep({name: 'Red Guy', photo: 'enter photo source here', address: '999 below ground', age: 1, description: 'red & butt naked', stars: '5',})
    await RedGuy.save()
    db.close()
  }
  
  saved()