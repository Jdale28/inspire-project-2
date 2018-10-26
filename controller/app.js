const User = require('../Models/User')
const Quote = require('../Models/Quote')
const Feeling = require('../Models/Feeling')

const app = {
    index: (req,res) => {
        res.render('index', { title: 'Inspire' });
    }
}

module.exports = app