// --------------------------------------------------------------
// You don't edit Chuck Norris!
class Norris {
  constructor() {
    this.index = 0
    this.jokes = [
      "Chuck Norris' tears cure cancer. Too bad he has never cried.",
      "Chuck Norris counted to infinity... Twice.",
      "Chuck Norris can divide by zero.",
      "Chuck Norris has 12 moons. One of those moons is the Earth.",
      "Chuck Norris ordered a Big Mac at Burger King, and got one."
    ]
  }

  currentJoke() {
    return this.jokes[this.index]
  }

  nextJoke() {
    this.index += 1
    this.index = this.index % this.jokes.length
    return this.currentJoke()
  }

  random() {
    return this.jokes[Math.floor(Math.random() * this.jokes.length)]
  }
}
// --------------------------------------------------------------
// Normal people are allowed to edit below this line

const norris = new Norris()

class Shouts {
  saySomething() {
    console.log(norris.currentJoke().toUpperCase())
  }
}

class Emojify {
  saySomething() {
    const emoji = '🎅'
    const str = norris.currentJoke()
    var regex = /Chuck Norris/gi;
    console.log(str.replace(regex, emoji));
  }
}

// Make a couple instances of Shouts and Emojify
const shouts = new Shouts()
const emojify = new Emojify()

// Should print the first Joke
shouts.saySomething()
emojify.saySomething()

// Gets the next joke
norris.nextJoke()

// Should print the second joke
shouts.saySomething()
emojify.saySomething()
