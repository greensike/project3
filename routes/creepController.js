
var express = require('express');
// var router = express.Router();
const router = express.Router({ mergeParams: true })

const { User } = require('../db/userSchema')
const { Creep } = require('../db/creepSchema.js')


router.get('/', (req, res, next) => {
    User.findById(req.params.userId)
        .then((user) => {
            const creep = user.creeps
            res.json('creep', {
                creep
            })
        })
})

router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            const creep = user.creeps.id(req.params.id)
            res.json({
                creep
            })
        })
})

router.post('/', (req, res) => {
    const creep = new Comment(req.body)
    User.findById(req.params.userId)
        .then((user) => {
            user.creeps.push(creep)
            return creeps.save()
        })
        .then(() => {
            res.redirect(`/user/${req.params.userId}/creep`)
        })
})

router.patch('/:id', (req, res)=>{
    User.findById(req.params.userId)
    .then((user)=>{
        const creep = user.creep.id(req.params.id)

        creep.name = req.body.name
        creep.description = req.body.description
        creep.address = req.body.address
        creep.age = req.body.age


        return user.save()
    })
    .then((user)=>{
        res.send({
            store: user.stores.id(req.params.id)
        })
    })
})


router.delete('/:id', (req, res) => {

})










module.exports = router
