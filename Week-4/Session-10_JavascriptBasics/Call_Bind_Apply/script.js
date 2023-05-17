// Calculator class does basic mathematical operations such as add, subtract, multiply and divide
class Calculator {
  /* Calculates sum of two numbers
    @param {number} num1 - First Number
    @param {number} num2 - Second Number */
  add(num1, num2) {
    return num1 + num2;
  }
  /*   Calculates difference of two number
  @param {number} num1 - First Number
  @param {number} num2 - Second Number */
  subtract(num1, num2) {
    return num1 - num2;
  }
  /*   Calculates multiplication of two number
  @param {number} num1 - First Number
  @param {number} num2 - Second Number */
  multiply(num1, num2) {
    return num1 * num2;
  }
  /*   Divides two number
  @param {number} num1 - First Number
  @param {number} num2 - Second Number */
  divide(num1, num2) {
    return num1 / num2;
  }
}

class ScientificCalculator extends Calculator {
  /* Calculates the square of a Number
    @param {number} num  */
  square(num) {
    return num * num;
  }
  /* Calculates cube of the Number
    @param {number} num  */
  cube(num) {
    return num * num * num;
  }
  /* returns x raised to power of y
    @param {number} x - The base number
    @param {number} y - The power */
  power(base, power) {
    return Math.pow(base, power);
  }
}

const scientificCal = new ScientificCalculator();
// Invoke add using call
console.log(scientificCal.add.call(new Calculator(), 10, 5));

// Invoke subtract using apply method
console.log(scientificCal.subtract.apply(new Calculator(), [10, 5]))

// function multiplies a number with 2 and returns it
//  TODO: Do not understant context of call, apply and bind in terms of class