/* Returns a function which increases count everytime it is called and return it */
function counter() {
  let count = 0;
  function increaseCount() {
    count++;
    return count;
  }

  return increaseCount;
}
//Assigns increaseCount function to firstCounter and secondCounter but with different set of 'count'
const firstCounter = counter();
const secondCounter = counter();

// Initialise two empty arrays to store results
const firstValues = [];
const secondValues = [];

// call firstCounter 5 times and store to array
for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}
// call secondCounter 3 times and store to array
for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

console.log(firstValues);
console.log(secondValues);
