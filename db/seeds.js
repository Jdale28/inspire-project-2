const Feeling = require('../Models/Feeling')
const Quote = require('../Models/Quote')

Quote.find({}).remove(() => {
    Feeling.find({}).remove(() => {
        let kennedyOne = Quote.create({
            content: "Ask not what your country can do for you, ask what you can do for your country",
            speaker: "John F. Kennedy"
        }).then(quote => {
            Promise.all([
                Feeling.create({
                    name: "Self-Reflective",
                    quoteWith: quote
                }).then(feeling => {
                    quote.feeling.push(feeling)
                }),
            ]).then(() => {
                quote.save()
            })
        })
        let clintonOne = Quote.create({
            content: "That depends upon what the meaning of the word 'is' is",
            speaker: "Bill Clinton"
        }).then(quote => {
            Promise.all([
                Feeling.create({
                    name: "Betrayed"
                }).then(feeling => {
                    quote.feeling.push(feeling)
                }),
            ]).then(() => {
                quote.save()
            })
        })
    })
})