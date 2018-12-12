// TIC TAC TOE

// Part 1: Define an array that represents a game of tic tac toe. X has won on a diagonal

// Part 2: Add code to the draw() function. It should write the game array to the console and show the results. It shoud draw the game board like you would draw it on paper. And look something like: '''


const game = [
    ['o','o','x'],
    ['o','x','o'],
    ['x','o','o']
]

function draw(game) {
  for (let i in game){
    let r = ''
      for (let j in game[i]){
        r += game[i][j] + " ";
    }
    console.log(r)
  }
}

draw(game)
