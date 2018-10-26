let Quote = require('../Models/Quote')

const Feeling = require('../Models/Feeling')
const name = ['Loved','Happy', 'Joyful', 'Excited', 'Amazed', 'Reflective', 'Betrayed', 'Jealous', 'Self-Pity', 'Sad', 'Afraid', 'Lonely', 'Suffering', 'Disdain', 'Annoyed', 'Angry']

for(var i = 0; i<name.length; i++) {
    Feeling.create({
        name: name[i]
    }).then((name) => {
        name.save()
    })
}

let newQuotes = [{
        speaker: '',
        content: '',
        feeling: ''
    },
    {
        speaker: '',
        content: '',
        feeling: ''
    },
    {
        speaker: '',
        content: '',
        feeling: ''
    },
    {
        speaker: '',
        content: '',
        feeling: ''
    }
]

// Quote.remove({})
//     .then(() => Feeling.remove())
//     .then(() => newFeeling.save())
//     .then(() => newQuote.save())
//     .then(() => console.log("Database seeded success"))
//     .then(() => mongoose.connection.close())