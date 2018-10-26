const mongoose = require("../db/connections")
const Schema = mongoose.Schema

const User = mongoose.Schema ({
    name: String,
    age: Number,
    sex: String,
    favoriteQuotes: [],
    feeling: []
})

module.exports = mongoose.model("User", User)