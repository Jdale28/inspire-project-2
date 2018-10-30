const User = require('../Models/User')
const Quote = require('../Models/Quote')
const Feeling = require('../Models/Feeling')

const userController = {
    index: (req, res) => {
        User.find().populate('favoriteQuotes').then((user) => {
            console.log(user)
            res.render('user/index', {
                user: user
            })
        })
    },
    create: (req, res) => {
        User.findById(req.params.id).then((user) => {
            console.log(req.body)
        })
    },

    edit: (req, res) => {
        User.findById(req.params.id).then(user => {
            res.render(`user/edit`, {
                user: user
            })
        })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body)
            .then(updatedUser => {
                res.redirect(`/user`)
            })
    }
}

module.exports = userController