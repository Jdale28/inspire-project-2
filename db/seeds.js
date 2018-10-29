const mongoose = require('./connections')
const Feeling = require('../Models/Feeling')
const Quote = require('../Models/Quote')
const User = require('../Models/User')

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

const lovedOne = new Quote ({
    content: "The greatest thing you'll ever learn is to love and be loved in return.",
    speaker: "Moulin Rouge, 2001",
    feeling: loved
})
const lovedTwo = new Quote ({
    content: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    speaker: "Lao Tzu, Chinese Philosopher",
    feeling: loved
})
const lovedThree = new Quote ({
    content: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    speaker: "Martin Luther King, Jr., Civil Rights Activist",
    feeling: loved
})
const lovedFour = new Quote ({
    content: "Love all, truth a few, do wrong to none.",
    speaker: "William Shakespeare, Author & Poet",
    feeling: loved
})
const lovedFive = new Quote ({
    content: "A dog is the only thing on Earth that loves you more than you love yourself.",
    speaker: "Josh Billings, American Humorist",
    feeling: loved
})
const lovedSix = new Quote ({
    content: "A flower cannot blossom without sunshine, and man cannot live without love.",
    speaker: "Max Muller, German Philologist",
    feeling: loved
})
const betrayedOne = new Quote ({
    content: "That depends upon what the meaning of the word 'is' is.",
    speaker: "Bill Clinton, President 1993-2001",
    feeling: betrayed
})
const reflectiveOne = new Quote ({
    content: "Ask not what your country can do for you, ask what you can do for your country.",
    speaker: "John F. Kennedy, President 1961-63",
    feeling: reflective
})
const reflectiveTwo = new Quote ({
    content: "Only I can change my life. No one can do it for me.",
    speaker: "Carol Burnett, American Author",
    feeling: reflective
})   
const reflectiveThree = new Quote ({
    content: "I'm tired",
    speaker: "Spencer",
    feeling: reflective
})   


const newUser = new User({
    name: "Jordan",
    age: 30,
    sex: "male",
    favoriteQuotes: [reflectiveThree, reflectiveOne, betrayedOne],
    feeling: [loved, reflective]
})

User.remove({})
.then(()=> Quote.remove({}))
.then(()=> Feeling.remove({}))
.then(()=> Quote.insertMany([lovedOne, lovedTwo, lovedThree, lovedFour, lovedFive, lovedSix, betrayedOne, reflectiveOne, reflectiveTwo, reflectiveThree]))
.then(()=> Feeling.insertMany([loved, happy, joyful, excited, amazed, reflective, selfPity, jealous, disdain, betrayed, sad, lonely, annoyed, afraid, suffering, angry]))
.then(()=> newUser.save())
.then(()=> console.log("DATABASE SEED SUCCESS"))
.then(()=> mongoose.connection.close())