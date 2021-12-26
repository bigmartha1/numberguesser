let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9)
  }
  
  const getAbsoluteDistance = (targetNumber, guess) => {
    return Math.abs(targetNumber - guess)
  }
  
  const compareGuesses = (humanGuess, computerGuess, target) => {
    let humanGuessDifference = getAbsoluteDistance(target, humanGuess)
    let computerGuessDifference = getAbsoluteDistance(target, computerGuess)
    if (humanGuessDifference < computerGuessDifference) {
      return true
    } else if (humanGuessDifference > computerGuessDifference) {
      return false
    } else if (humanGuessDifference == computerGuessDifference) {
      return true
    }
  }
  
  const updateScore = (winner) => {
    if (winner == 'human') {
      ++humanScore
    } else if (winner == 'computer') {
      ++computerScore
    }
  }
  
  const advanceRound = () => {
    ++currentRoundNumber
  }
  
  const alert = (humanGuess) => {
    if (humanGuess < 0 || humanGuess > 9) {
      return 'Your number is out of range!'
    }
  }
