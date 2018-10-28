const User = require('../Models/User')
const Feeling = require('../Models/Feeling')
const Quote = require('../Models/Quote')

const quoteController = {
  list: (req, res) => {
    Quote.find().then((quote) => {
      res.render('quote/list', {quote: quote})
    })
  },
  new: (req, res) => {
    res.render('quote/new')
  },
  show: (req, res) => {
    Quote.findById(req.params.id).then((quote) => {
      res.render('quote/show', {
        quote: quote
      })
    })
  },
  create: (req, res) => {
    Quote.create(req.body).then((newQuote) => {
      res.redirect(`/${newQuote._id}`)
    })
  },
  edit: (req, res) => {
    Quote.findById(req.params.id).then(quote => {
      console.log("hit one")
      res.render(`quote/edit`, { quote: quote })
      console.log("hit two")
    })
  },
  update: (req, res) => {
    Quote.findByIdAndUpdate(req.params.id, req.body).then((updatedQuote) => {
      res.redirect(`/${updatedQuote._id}/show`)
    })
  },
//   delete: (req, res) => {
//     Quote.findByIdAndRemove(req.params.id).then(() => {
//       res.redirect('/')
//     })
//   }
}

module.exports = quoteController