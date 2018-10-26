const User = require('../Models/User')
const Quote = require('../Models/Quote')
const Feeling = require('../Models/Feeling')

const app = {
    index: (req, res) => {
        Quote.find().then((quote) => {
            Feeling.find().then((feeling) => {
                res.render('index', {
                    title: 'Inspire',
                    feeling: feeling,
                    quote: quote
                });
            })
        })
    }
}

module.exports = app