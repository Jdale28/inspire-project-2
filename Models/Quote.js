const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Quote = mongoose.Schema({
  content: String,
  speaker: String,
  feeling: [{
      type: Schema.Types.ObjectId,
      ref: 'Feeling'
  }],
  icon: String,
})

module.exports = mongoose.model('Quote', Quote)