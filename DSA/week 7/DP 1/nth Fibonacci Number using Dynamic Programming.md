## Problem Statement:
nth Fibonacci Number using Dynamic Programming

## Problem Statement:
Write a program to calculate the nth Fibonacci number using dynamic programming. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. The sequence starts with 0 and 1. Your task is to calculate the nth Fibonacci number efficiently using dynamic programming.


## Input Format:
The user is prompted to enter an integer value for n, which represents the position of the Fibonacci number to be calculated.

## Output Format:
The program prints the value of the nth Fibonacci number.

## Test Case 1:
Sample Input:
7

Sample Output:
13

## Test Case 2:
sample input: 
5

sample output:
5


## Level: Easy

## Hints:
- Use an array to store the Fibonacci numbers.
Initialize the base cases: fib[0] = 0 and fib[1] = 1.
- Calculate the Fibonacci numbers from the bottom-up approach, using the previously calculated values.
Return the nth Fibonacci number.

## Approach:
- Take input from the user as the value of n.
- Create an array fib to store the Fibonacci numbers.
- Initialize the base cases: fib[0] = 0 and fib[1] = 1.
- Iterate from 2 to n:
- Calculate the Fibonacci number at index i by adding the previous two Fibonacci numbers: fib[i] = fib[i - 1] + fib[i - 2].
- Return the nth Fibonacci number: fib[n].
- Print the result.


## Code
[509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/submissions/1017454708/)
```
/**
 * This function calculates the nth Fibonacci number using a dynamic programming approach.
 * @param {number} n - The index of the desired Fibonacci number.
 * @return {number} - The nth Fibonacci number.
 */
var fib = function(n) {
    // Base cases: Fibonacci numbers for n = 0 and n = 1 are 0 and 1 respectively.
    if (n == 0 || n == 1)
        return n;

    // Initialize variables to keep track of the earlier and later Fibonacci numbers.
    let earlier = 0;  // The Fibonacci number for n = 0.
    let later = 1;    // The Fibonacci number for n = 1.

    // Iterate from n = 2 to the desired n, calculating Fibonacci numbers iteratively.
    for (let i = 2; i <= n; i++) {
        result = earlier + later;  // Calculate the next Fibonacci number by summing the earlier and later numbers.
        earlier = later;           // Update earlier to the value of the previous "later" number.
        later = result;            // Update later to the newly calculated Fibonacci number.
    }
    
    // Return the final calculated Fibonacci number for the given index n.
    return result;
};
```