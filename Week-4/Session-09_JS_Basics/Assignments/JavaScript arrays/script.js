function divideArray(numbers) {
  // Sort numbers in ascending order
  const sortedNums = numbers.sort((a, b) => a - b);
  //   initialise emtpy arrays for even and odd numbers
  const evenNums = [];
  const oddNums = [];
  //iterate through sortednums and add to respective array
  for (const num of sortedNums) {
    num % 2 == 0 ? evenNums.push(num) : oddNums.push(num);
  }
  //   Output even numbers, and output none if there are none
  console.log("Even numbers:");
  evenNums.length > 0
    ? evenNums.map((num) => console.log(num))
    : console.log("None");
  // output odd numbers to console, and none if there are none
  console.log("Odd numbers:");
  oddNums.length > 0
    ? oddNums.map((num) => console.log(num))
    : console.log("None");
}
