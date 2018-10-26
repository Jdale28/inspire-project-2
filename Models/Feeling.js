const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Feeling = mongoose.Schema({
  name: String,
  quotesWith: []
})

module.exports = mongoose.model('Feeling', Feeling)