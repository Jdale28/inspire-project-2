const mongoose = require("../db/connections")
const Schema = mongoose.Schema

const User = mongoose.Schema ({
    name: String,
    age: Number,
    sex: String,
    favoriteQuotes: [{
        type: Schema.Types.ObjectId,
        ref: 'Quote'
    }],
    feeling: [{
        type: Schema.Types.ObjectId,
        ref: 'Feeling'
    }],
})

module.exports = mongoose.model("User", User)