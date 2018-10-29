const mongoose = require('./connections')
const Feeling = require('../Models/Feeling')
const Quote = require('../Models/Quote')
const User = require('../Models/User')

const loved = new Feeling({
    name: "Loved 😍",
})
const happy = new Feeling({
    name: "Happy 😊",
})
const joyful = new Feeling({
    name: "Joyful 😂"
})
const amazed = new Feeling({
    name: "Amazed 😲"
})
const reflective = new Feeling({
    name: "Reflective 🤔"
})
const selfPity = new Feeling({
    name: "Self-Pity 🤧"
})
const jealous = new Feeling({
    name: "Jealous 🤑"
})
const betrayed = new Feeling({
    name: "Betrayed 🤕"
})
const lonely = new Feeling({
    name: "Lonely 😔"
})
const afraid = new Feeling({
    name: "Afraid 😱"
})
const suffering = new Feeling({
    name: "Suffering 😭"
})
const angry = new Feeling({
    name: "Angry 🤬"
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
    feeling: joyful
})
const joyTwo = new Quote ({
    content: "I have drunken deep of joy, and I will taste no other wine tonight.",
    speaker: "Percy Bysshe Shelley, English poet",
    feeling: joyful
})
const joyThree = new Quote ({
    content: "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    speaker: "Thich Nhat Hanh, Vietnamese monk & peace activist",
    feeling: joyful
})
const joyFour = new Quote ({
    content: "To get the full value of joy you must have someone to divide it with.",
    speaker: "Mark Twain, American author",
    feeling: joyful
})
const joyFive = new Quote ({
    content: "One can never consent to creep when one feels an impulse to soar.",
    speaker: "Helen Keller, American author & activist",
    feeling: joyful
})
const joySix = new Quote ({
    content: "Joy is the infallible sign of the presence of God.",
    speaker: "Pierre Teilhard de Chardin, French philosopher & Jesuit priest",
    feeling: joyful
})
const amazedOne = new Quote ({
    content: "Amazement awaits us at every corner.",
    speaker: "James Broughton, American poet & filmmaker",
    feeling: amazed
})
const amazedTwo = new Quote ({
    content: "Wonder is the beginning of wisdom.",
    speaker: "Socrates, Greek philosopher",
    feeling: amazed
})
const amazedThree = new Quote ({
    content: "The simplicity of life never ceases to amaze me, and the many ways we complicate it blows my mind.",
    speaker: "TemitOpe Ibrahim, Author",
    feeling: amazed
})
const amazedFour= new Quote ({
    content: "Almost the entire world is asleep. Those who are awake live in constant amazement.",
    speaker: "Tom Hanks, American actor",
    feeling: amazed
})
const amazedFive = new Quote ({
    content: "Each day, each moment is a step into the unknown. How can we feel anything but amazement?",
    speaker: "Ivan M. Granger, American poet",
    feeling: amazed
})
const amazedSix = new Quote ({
    content: "Be absolutely assured that we will die long before our own deaths if we ever allow the fear of adulthood to kill the wonder of childhood.",
    speaker: "Craig D. Lounsbrough, American counselor & author",
    feeling: amazed
})
const reflectiveOne = new Quote ({
    content: "This past, present, and future are the province of each of us, and it is by our hand that they are ruled.",
    speaker: "Billy Dale, Father",
    feeling: reflective
})
const reflectiveTwo = new Quote ({
    content: "Ask not what your country can do for you, but what you can do for your country.",
    speaker: "John F. Kennedy, 35th President 1961-63",
    feeling: reflective
})
const reflectiveThree = new Quote ({
    content: "The individual who says it is not possible should move out of the way of those doing it.",
    speaker: "Tricia Cunningham, American author",
    feeling: reflective
})
const reflectiveFour = new Quote ({
    content: "Can you remember who you were, before the world told you who you should be?",
    speaker: "Danielle LaPorte, Canadian author",
    feeling: reflective
})
const reflectiveFive = new Quote ({
    content: "Self-trust is the first secret of success.",
    speaker: "Ralph Waldo Emerson, American author",
    feeling: reflective
})
const reflectiveSix = new Quote ({
    content: "We don't see things as they are, we see them as we are.",
    speaker: "Anais Nin, French writer",
    feeling: reflective
})
const selfPityOne = new Quote ({
    content: "I never saw a wild thing sorry for itself. A small bird will drop frozen dead from a bough without ever having felt sorry for itself.",
    speaker: "D.H. Lawrence, English writer & poet",
    feeling: selfPity
})
const selfPityTwo = new Quote ({
    content: "All depression has its roots in self-pity, and all self-pity is rooted in people taking themselves too seriously.",
    speaker: "Tom Robins, American novelist",
    feeling: selfPity
})
const selfPityThree = new Quote ({
    content: "Self pity is easily the most destructive of the non-pharmaceutical narcotics; it is addictive, gives momentary pleasure and separates the victim from reality.",
    speaker: "John Gardner, American writer",
    feeling: selfPity
})
const selfPityFour = new Quote ({
    content: "It's all right to sit on your pity pot every now and again. Just be sure to flush when you are finished.",
    speaker: "Debbie Macomber, American author",
    feeling: selfPity
})
const selfPityFive = new Quote ({
    content: "Self-pity is spiritual suicide. It is an indefensible self-mutilation of the soul.",
    speaker: "Anthon St. Maarten, Psychic Medium",
    feeling: selfPity
})
const selfPitySix = new Quote ({
    content: "No one can please a man who is not at peace with himself.",
    speaker: "Bamigboye Olurotimi, Nigerian author",
    feeling: selfPity
})
const sufferingOne = new Quote ({
    content: "Happiness is not something you postpone for the future; it is something you design for the present.",
    speaker: "Jim Rohn, American entrepreneur and author",
    feeling: suffering
})
const sufferingTwo = new Quote ({
    content: "Some days are just bad days, that's all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that's just the way it is.",
    speaker: "Dita Von Teese, American vedette",
    feeling: suffering
})
const sufferingThree = new Quote ({
    content: "Every day is a new day, and you'll never be able to find happiness if you don't move on.",
    speaker: "Carrie Underwood, American singer",
    feeling: suffering
})
const sufferingFour = new Quote ({
    content: "Happiness is a choice. You can choose to be happy. There's going to be stress in life, but it's your choice whether you let it affect you or not.",
    speaker: "Valerie Bertinelli, American actress",
    feeling: suffering
})
const sufferingFive = new Quote ({
    content: "Happiness is not something ready made. It comes from your own actions.",
    speaker: "Dalai Lama, religious leader and activist",
    feeling: suffering
})
const sufferingSix = new Quote ({
    content: "I do believe that if you haven't learnt about sadness, you cannot appreciate happiness.",
    speaker: "Nana Mouskouri, Greek singer",
    feeling: suffering
})
const lonelyOne = new Quote ({
    content: "The only time we waste is the time we spend thinking we are alone.",
    speaker: "Mitch Albom",
    feeling: lonely
})



const newUser = new User({
    name: "Jordan",
    age: 30,
    sex: "male",
    favoriteQuotes: [lovedOne, happyThree, happyFive],
    feeling: [loved, reflective]
})

User.remove({})
.then(()=> Quote.remove({}))
.then(()=> Feeling.remove({}))
.then(()=> Quote.insertMany([
    lovedOne, lovedTwo, lovedThree, lovedFour, lovedFive, lovedSix, 
    happyOne, happyTwo, happyThree, happyFour, happyFive, happySix,
    joyOne, joyTwo, joyThree, joyFour, joyFive, joySix,
    amazedOne, amazedTwo, amazedThree, amazedFour, amazedFive, amazedSix,
    reflectiveOne, reflectiveTwo, reflectiveThree, reflectiveFour, reflectiveFive, reflectiveSix,
    selfPityOne, selfPityTwo, selfPityThree, selfPityFour, selfPityFive, selfPitySix,
    lonelyOne, sufferingOne, sufferingTwo, sufferingThree, sufferingFour, sufferingFive, sufferingSix,
]))
.then(()=> Feeling.insertMany([loved, happy, joyful, amazed, reflective, selfPity, jealous, betrayed, lonely, afraid, suffering, angry]))
.then(()=> newUser.save())
.then(()=> console.log("DATABASE SEED SUCCESS"))
.then(()=> mongoose.connection.close())
