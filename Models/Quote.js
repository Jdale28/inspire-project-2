const mongoose = require('../db/connections')

const Quote = new mongoose.Schema({
  content: String,
  speaker: String
})

module.exports = mongoose.model('Quote', Quote)