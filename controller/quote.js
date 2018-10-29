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
  new: (req, res) => {
    console.log("new")
    res.render('quote/new')
  },
  show: (req, res) => {
    console.log("show")
    Quote.findById(req.params.id).then((quote) => {
      res.render('quote/show', {
        quote: quote
      })
    })
  },
  create: (req, res) => {
    console.log("create")
    Quote.create(req.body).then((newQuote) => {
      res.redirect(`/${newQuote._id}`)
    })
  },
  edit: (req, res) => {
    console.log("edit")
    Quote.findById(req.params.id).then(quote => {
      res.render(`quote/edit`, { quote: quote })
    })
  },
  update: (req, res) => {
    console.log("update")
    Quote.findByIdAndUpdate(req.params.id, req.body).then((updatedQuote) => {
      res.redirect(`/${updatedQuote._id}`)
    })
  },
//   delete: (req, res) => {
//     Quote.findByIdAndRemove(req.params.id).then(() => {
//       res.redirect('/')
//     })
//   }
}

module.exports = quoteController