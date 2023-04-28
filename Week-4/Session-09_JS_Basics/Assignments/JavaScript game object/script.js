// Define a new object called game
const game = {
  // Initialize the properties of the game object
  lives: 3, // the number of lives the player has, initially set to 3
  coins: 0, // the number of coins the player has, initially set to 0

  // Define a getter that calculates the number of points the player has earned
  get points() {
    return this.coins * 10; // each coin is worth 10 points
  },

  // Define a method that subtracts 1 from the lives property if the player has lives remaining
  playerDies() {
    this.lives > 0 ? this.lives-- : this.lives; // use a ternary operator to decrement lives if it is greater than 0
  },

  // Define a method that resets the lives and coins properties to their initial values
  newGame() {
    this.lives = 3; // reset lives to 3
    this.coins = 0; // reset coins to 0
  },
};

console.log("lives = " + game.lives); // should be 3
console.log("coins = " + game.coins); // should be 0
console.log("points = " + game.points); // should be 0
game.coins = 2;
console.log("points = " + game.points); // should be 20
game.playerDies();
console.log("lives = " + game.lives); // should be 2
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives = " + game.lives); // should be 0
game.newGame();
console.log("lives = " + game.lives); // should be 3
console.log("coins = " + game.coins); // should be 0
