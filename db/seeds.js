const Feeling = require('../Models/Feeling')
const Quote = require('../Models/Quote')
const User = require('../Models/User')

// Quote.find({}).remove(() => {
//     Feeling.find({}).remove(() => {
//         let kennedyOne = Quote.create({
//             content: "Ask not what your country can do for you, ask what you can do for your country",
//             speaker: "John F. Kennedy"
//         }).then(quote => {
//             Promise.all([
//                 Feeling.create({
//                     name: "Self-Reflective",
//                     quoteWith: quote
//                 }).then(feeling => {
//                     quote.feeling.push(feeling)
//                 }),
//             ]).then(() => {
//                 quote.save()
//             })
//         })
//         let clintonOne = Quote.create({
//             content: "That depends upon what the meaning of the word 'is' is",
//             speaker: "Bill Clinton"
//         }).then(quote => {
//             Promise.all([
//                 Feeling.create({
//                     name: "Betrayed"
//                 }).then(feeling => {
//                     quote.feeling.push(feeling)
//                 }),
//             ]).then(() => {
//                 quote.save()
//             })
//         })
//     })
// })

const loved = new Feeling({
    feeling: "Loved"
})
const angry = new Feeling({
    feeling: "Anger"
})
const betrayed = new Feeling({
    feeling: "Betrayed"
})
const reflective = new Feeling({
    feeling: "Reflective"
})

const clintonOne = new Quote ({
    content: "That depends upon what the meaning of the word 'is' is.",
    speaker: "Bill Clinton, President 1993-2001",
    feeling: betrayed
})
const kennedyOne = new Quote ({
    content: "Ask not what your country can do for you, ask what you can do for your country.",
    speaker: "John F. Kennedy, President 1961-63",
    feeling: reflective
})
const carolOne = new Quote ({
    content: "Only I can change my life. No one can do it for me.",
    speaker: "Carol Burnett, American Author",
    feeling: reflective
})   

const newUser = new User({
    name: "Jordan",
    age: 30,
    sex: "male",
    favoriteQuotes: [carolOne, kennedyOne],
    feeling: []
})

User.remove({})
.then(()=> Quote.insertMany([clintonOne, kennedyOne, carolOne]))
.then(()=> Feeling.insertMany([loved, angry, betrayed, reflective]))
.then(()=> newUser.save())