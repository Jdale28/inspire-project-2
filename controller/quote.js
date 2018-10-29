const User = require('../Models/User')
const Feeling = require('../Models/Feeling')
const Quote = require('../Models/Quote')

const quoteController = {
  list: (req, res) => {
    console.log("list")
    Quote.find().then((quote) => {
      res.render('quote/list', {quote: quote})
    })
  },
  update: (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    Quote.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedQuote => {
      // res.redirect(`/quote/${updatedQuote._id}`)
      res.send(updatedQuote)
    })
  },
  show: (req, res) => {
    console.log("show")
    Quote.findById(req.params.id).then((quote) => {
      res.render('quote/show', {quote: quote})
    })
  },
  new: (req, res) => {
    console.log("new")
    Feeling.find().then((feeling) => {
      res.render('quote/new', {feeling: feeling})
    })
  },
  create: (req, res) => {
    console.log(req.body)
    Quote.create(req.body).then((newQuote) => {
      res.redirect(`/quote/${newQuote._id}`)
    })
  },
  edit: (req, res) => {
    console.log("edit")
    Quote.findById(req.params.id).then(quote => {
      res.render(`quote/edit`, { quote: quote })
    })
  },
  // delete: (req, res) => {
  //   Quote.findByIdAndRemove(req.params.id).then(() => {
  //     res.redirect('/', {quote: quote})
  //   })
  // }
}

module.exports = quoteController