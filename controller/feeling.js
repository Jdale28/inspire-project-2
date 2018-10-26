const User = require('../Models/User')
const Quote = require('../Models/Quote')
const Feeling = require('../Models/Feeling')

const feelingController = {
    list: (req, res) => {
        Feeling.find()
            .then(feeling => {
                res.render('feeling/list', {feeling: feeling})
            })
    }
}

module.exports = feelingController