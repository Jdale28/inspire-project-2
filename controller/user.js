const User = require('../Models/User')
const Quote = require('../Models/Quote')
const Feeling = require('../Models/Feeling')

const userController = {
    index: (req, res) => {
        res.render('user/index')
    },
    profile: ""
}

module.exports = userController