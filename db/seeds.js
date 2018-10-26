const mongoose = require('./connections')
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
    name: "Loved"
})
const happy = new Feeling({
    name: "Happy"
})
const joyful = new Feeling({
    name: "Joyful"
})
const excited = new Feeling({
    name: "Excited"
})
const amazed = new Feeling({
    name: "Amazed"
})
const reflective = new Feeling({
    name: "Reflective"
})
const selfPity = new Feeling({
    name: "Self-Pity"
})
const jealous = new Feeling({
    name: "Jealous"
})
const disdain = new Feeling({
    name: "Disdain"
})
const betrayed = new Feeling({
    name: "Betrayed"
})
const sad = new Feeling({
    name: "Sad"
})
const lonely = new Feeling({
    name: "Lonely"
})
const annoyed = new Feeling({
    name: "Annoyed"
})
const afraid = new Feeling({
    name: "Afraid"
})
const suffering = new Feeling({
    name: "Suffering"
})
const angry = new Feeling({
    name: "Angry"
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
const spencerOne = new Quote ({
    content: "I'm tired",
    speaker: "Spencer",
    feeling: reflective
})   


const newUser = new User({
    name: "Jordan",
    age: 30,
    sex: "male",
    favoriteQuotes: [carolOne, kennedyOne],
    feeling: [loved, reflective]
})

User.remove({})
.then(()=> Quote.remove({}))
.then(()=> Feeling.remove({}))
.then(()=> Quote.insertMany([clintonOne, kennedyOne, carolOne, spencerOne]))
.then(()=> Feeling.insertMany([loved, happy, joyful, excited, amazed, reflective, selfPity, jealous, disdain, betrayed, sad, lonely, annoyed, afraid, suffering, angry]))
.then(()=> newUser.save())
.then(()=> console.log("DATABASE SEED SUCCESS"))
.then(()=> mongoose.connection.close())


// If user press Loved

// Query Database for all Quotes

// If Quote.feeling = Loved  >  Push to array
// Loop array (Simon Says), Select One

// Put that one in body of modal
// pop that one from array

// If user presses shuffle, repeat