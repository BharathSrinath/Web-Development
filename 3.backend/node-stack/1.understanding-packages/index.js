// 1. give-me-a-joke package

const jokes = require("give-me-a-joke")
// console.dir(jokes)

// $ node index.js
    // {
    //     getRandomCNJoke: [Function (anonymous)],
    //     getCustomJoke: [Function (anonymous)],
    //     getRandomDadJoke: [Function (anonymous)],
    //     getRandomJokeOfTheDay: [Function (anonymous)]
    //   }

// This package has 4 different methods

jokes.getRandomDadJoke((joke)=> {
    console.log(joke)
})

// $ node index.js
    // Why are fish easy to weigh? Because they have their own scales.

// color package
const colors = require("colors")
jokes.getRandomDadJoke((joke)=> {
    console.log(joke.rainbow)
})

jokes.getRandomDadJoke((joke)=> {
    const a = joke;
    console.log(colors.green(a))
})