const User = require('../Models/User')
const Quote = require('../Models/Quote')
const Feeling = require('../Models/Feeling')

const app = {
    index: (req, res) => {
        
        User.findById('5bd8bb2d9717550fd4226703').then((user) => {
            const userId = user._id
            Quote.find().then((quote) => {
                Feeling.find().then((feeling) => {
                    res.render('index', {
                        title: 'Inspire',
                        feeling: feeling,
                        quote: quote,
                        userId: userId
                    });
                })
            })
        })
    }
}

module.exports = app