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
    speaker: "Moulin Rouge, Movie - 2001",
    feeling: loved
})
const lovedTwo = new Quote ({
    content: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    speaker: "Lao Tzu, Chinese philosopher",
    feeling: loved
})
const lovedThree = new Quote ({
    content: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    speaker: "Martin Luther King, Jr., Civil Rights activist",
    feeling: loved
})
const lovedFour = new Quote ({
    content: "Love all, truth a few, do wrong to none.",
    speaker: "William Shakespeare, author & poet",
    feeling: loved
})
const lovedFive = new Quote ({
    content: "A dog is the only thing on Earth that loves you more than you love yourself.",
    speaker: "Josh Billings, American humorist",
    feeling: loved
})
const lovedSix = new Quote ({
    content: "A flower cannot blossom without sunshine, and man cannot live without love.",
    speaker: "Max Muller, German philologist",
    feeling: loved
})
const happyOne = new Quote ({
    content: "Be happy for this moment. This moment is your life.",
    speaker: "Omar Khayyam, Persian poet & scientist",
    feeling: happy
})
const happyTwo = new Quote ({
    content: "The secret to happiness is freedom... And the secret to freedom is courage",
    speaker: "Thucydides, Athenian general and historian",
    feeling: happy
})
const happyThree = new Quote ({
    content: "Happiness doesn't depend on any external conditions, it is governed by our mental attitude.",
    speaker: "Dale Carnegie, American writer",
    feeling: happy
})
const happyFour = new Quote ({
    content: "Happiness lies in the joy of achievement and the thrill of creative effort.",
    speaker: "Franklin D. Roosevelt, 32nd President 1933-45",
    feeling: happy
})
const happyFive = new Quote ({
    content: "I get way too much happiness from good food.",
    speaker: "Elizabeth Olsen, American actress",
    feeling: happy
})
const happySix = new Quote ({
    content: "Happiness is when what you think, what you say, and what you do are in harmony.",
    speaker: "Mahatma Gandhi, Indian activist",
    feeling: happy
})
const joyOne = new Quote ({
    content: "When you do things from your soul, you feel a river moving in you, a joy.",
    speaker: "Rumi, Perisan poet",
    feeling: happy
})
const joyTwo = new Quote ({
    content: "I have drunken deep of joy, and I will taste no other wine tonight.",
    speaker: "Percy Bysshe Shelley, English poet",
    feeling: happy
})
const joyThree = new Quote ({
    content: "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    speaker: "Thich Nhat Hanh, Vietnamese monk & peace activist",
    feeling: happy
})
const joyFour = new Quote ({
    content: "To get the full value of joy you must have someone to divide it with.",
    speaker: "Mark Twain, American author",
    feeling: happy
})
const joyFive = new Quote ({
    content: "One can never consent to creep when one feels an impulse to soar.",
    speaker: "Helen Keller, American author & activist",
    feeling: happy
})
const joySix = new Quote ({
    content: "Joy is the infallible sign of the presence of God.",
    speaker: "Pierre Teilhard de Chardin, French philosopher & Jesuit priest",
    feeling: happy
})
const excitedOne = new Quote ({
    content: "The excitement of dreams coming true is beyong the description of words.",
    speaker: "Lailah Gifty Akita, Ghanaian humanitarian",
    feeling: excited
})
const excitedTwo = new Quote ({
    content: "The sicken of the calm who know the storm",
    speaker: "Dorothy Parker, American poet",
    feeling: excited
})
const excitedThree = new Quote ({
    content: "Without leaps of imagination or dreaming, we lose the excitement of possibilities. Dreaming, after all is a form of planning.",
    speaker: "Gloria Steinem, American journalist & political activist",
    feeling: excited
})
const excitedFour = new Quote ({
    content: "But I can hardly sit still. I keep fidgeting, crossing one leg and then the other. I feel like I could throw off sparks, or break a window--maybe rearrange all the furniture.",
    speaker: "Raymond Carver, American writer & poet",
    feeling: excited
})
const excitedFive = new Quote ({
    content: "I feel the need to endanger myself every so often.",
    speaker: "Tim Daly, American actor & producer",
    feeling: excited
})
const excitedSix = new Quote ({
    content: "I wanted change and excitement and to shoot off in all directions myself, like the colored arrows from a Fourth of July rocket.",
    speaker: "Sylvia Plath, American poet & novelist",
    feeling: excited
})
const sadOne = new Quote ({
    content: "Happiness is not something you postpone for the future; it is something you design for the present.",
    speaker: "Jim Rohn, American entrepreneur and author",
    feeling: sad
})
const sadTwo = new Quote ({
    content: "Some days are just bad days, that's all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that's just the way it is.",
    speaker: "Dita Von Teese, American vedette",
    feeling: sad
})
const sadThree = new Quote ({
    content: "Every day is a new day, and you'll never be able to find happiness if you don't move on.",
    speaker: "Carrie Underwood, American singer",
    feeling: sad
})
const sadFour = new Quote ({
    content: "Happiness is a choice. You can choose to be happy. There's going to be stress in life, but it's your choice whether you let it affect you or not.",
    speaker: "Valerie Bertinelli, American actress",
    feeling: sad
})
const sadFive = new Quote ({
    content: "Happiness is not something ready made. It comes from your own actions.",
    speaker: "Dalai Lama, religious leader and activist",
    feeling: sad
})
const sadSix = new Quote ({
    content: "I do believe that if you haven't learnt about sadness, you cannot appreciate happiness.",
    speaker: "Nana Mouskouri, Greek singer",
    feeling: sad
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
    speaker: "Carol Burnett, American author",
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
.then(()=> Quote.insertMany([
    lovedOne, lovedTwo, lovedThree, lovedFour, lovedFive, lovedSix,
    happyOne, happyTwo, happyThree, happyFour, happyFive, happySix,
    joyOne, joyTwo, joyThree, joyFour, joyFive, joySix,
    excitedOne, excitedTwo, excitedThree, excitedFour, excitedFive, excitedSix,
    sadOne, sadTwo, sadThree, sadFour, sadFive, sadSix,
    betrayedOne, reflectiveOne, reflectiveTwo, reflectiveThree]))
.then(()=> Feeling.insertMany([loved, happy, joyful, excited, amazed, reflective, selfPity, jealous, disdain, betrayed, sad, lonely, annoyed, afraid, suffering, angry]))
.then(()=> newUser.save())
.then(()=> console.log("DATABASE SEED SUCCESS"))
.then(()=> mongoose.connection.close())