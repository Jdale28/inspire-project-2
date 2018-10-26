//= =====================
// REQUIREMENTS
//= =====================
// require the Quote model
const User = require('../Models/User')
const Feeling = require('../Models/Feeling')
const Quote = require('../Models/Quote')

const quoteController = {
  //= =====================
  // INDEX
  //= =====================
  // Create a function sends all Quotes to quote/index.hbs view
  index: (req, res) => {
    Quote.find().then((quote) => {
      // res.render('quote/index', {
      //   whateverIWantToCallItInHandlebars: allOfTheQuoteInMyDatabase
      // })
      res.render('quote/index', {
        quote: quote
      })
    })
  },
  //= =====================
  // NEW
  //= =====================
  // Create a function that renders the new.hbs form
  new: (req, res) => {
    res.render('quote/new')
  },
  //= =====================
  // SHOW
  //= =====================
  // Create a function that renders a single Quote's show page
  show: (req, res) => {
    Quote.findById(req.params.id).then((quote) => {
      res.render('quote/show', {
        quote: quote
      })
    })
  },

  //= =====================
  // CREATE
  //= =====================
  // Create a function that creates a new Quote
  // and upon success redirects back to the index page "/"
  create: (req, res) => {
    // req.body is just a JS object with data from the form
    Quote.create(req.body).then((newQuote) => {
      res.redirect(`/${newQuote._id}`)
    })
  },

  //= =====================
  // EDIT
  //= =====================
  // Create a function that renders the edit.hbs page and
  // sends that a Quote's data to it
  edit: (req, res) => {
    Quote.findById(req.params.id).then(quote => {
      res.render('quote/edit', { quote: quote })
    })
  },
  //= =====================
  // UPDATE
  //= =====================
  // Create a function that updates the Quote and
  // redirects back to the SHOW PAGE (not index)
  update: (req, res) => {
    Quote.findByIdAndUpdate(req.params.id, req.body).then((updatedQuote) => {
      res.redirect(`/quote/${updatedQuote._id}`)
    })
  },
  //= =====================
  // DELETE
  //= =====================
  // Create a function that deletes the Quote and
  // redirects back to index page "/"
  delete: (req, res) => {
    Quote.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/quote')
    })
  }
}

//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = quoteController