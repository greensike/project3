
var express = require('express');
var router = express.Router();
const router = express.Router({ mergeParams: true })

const { User } = require('../db/userSchema.js')
const { Creep } = require('../db/creepSchema.js')
