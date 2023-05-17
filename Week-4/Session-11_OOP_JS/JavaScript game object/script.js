// Setup a game object with lives 3 and initial coins 0
const game = {};
game.lives = 3;
game.coins = 0;

// points is 10 times of coins
Object.defineProperty(game, "points", {
  get() {
    return this.coins * 10;
  },
});

// reduce 1 from lives after 1 death, and when lives is greater than 0
game.playerDies = function () {
  if (this.lives > 0) {
    this.lives--;
  }
};

//Start new game
game.newGame = function () {
  this.lives = 3;
  this.coins = 0;
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
