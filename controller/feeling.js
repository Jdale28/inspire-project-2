const User = require('../Models/User')
const Quote = require('../Models/Quote')
const Feeling = require('../Models/Feeling')
var id = "5bd37cfcc0ff733eb16faaf7"

const feelingController = {
    list: (req, res) => {
        Feeling.find()
            .then(feeling => {
                res.render('feeling/list', {feeling: feeling})
            })
    }
}

module.exports = feelingController