const User = require('../Models/User')
const Feeling = require('../Models/Feeling')
const Quote = require('../Models/Quote')

const quoteController = {
  list: (req, res) => {
    Quote.find().then((quote) => {
      res.render('quote/list', {quote: quote})
    })
  },
  update: (req, res) => {
    Quote.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedQuote => {
      res.redirect(`/quote/${updatedQuote._id}`)
    })
  },
  show: (req, res) => {
    Quote.findById(req.params.id).then((quote) => {
      res.render('quote/show', {quote: quote})
    })
  },
  new: (req, res) => {
    Feeling.find().then((feeling) => {
      res.render('quote/new', {feeling: feeling})
    })
  },
  create: (req, res) => {
    Quote.create(req.body).then((newQuote) => {
      res.redirect(`/quote/${newQuote._id}`)
    })
  },
  edit: (req, res) => {
    Quote.findById(req.params.id).then(quote => {
      res.render(`quote/edit`, { quote: quote })
    })
  },
  delete: (req, res) => {
    Quote.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/quote')
    })
  }
}

module.exports = quoteController