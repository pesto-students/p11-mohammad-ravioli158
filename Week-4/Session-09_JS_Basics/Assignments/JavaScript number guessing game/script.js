/* Function facilitates a game where a number is given to guess and total number of attemps to guess instanceof.
@param {number} numToGuess - The number to be guessed
@param {number} totalGuess - Max allowed guesses with default value 10 */
function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guessCount = 0;
  let guess = 0;
  while (guessCount < totalGuesses && guess != numToGuess) {
    // Prompt to get a guess from user
    guess = prompt("Enter a number between 1 and 100");
    guess = parseInt(guess);
    // Validate user input
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      continue;
    }
    guessCount++;
  }
  if (guessCount <= totalGuesses && guess == numToGuess) {
    return guessCount;
  } else {
    return 0;
  }
}
