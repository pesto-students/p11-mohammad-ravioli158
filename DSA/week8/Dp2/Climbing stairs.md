## Problem Statement:
Climbing Stairs

## Problem Statement:
Write a program to determine the number of distinct ways to reach the top of a staircase with n steps, where a person can climb either 1 or 2 steps at a time. Your task is to calculate the number of distinct ways to reach the top step.


## Input Format:
The user is prompted to enter the number of steps.


## Output Format:
The program prints the number of distinct ways to reach the top step.


## Test Case 1:
Sample Input:
5

Sample Output:
8

## Test Case 2:
sample input: 
4

sample output:
5

## Level: Easy

## Hints:
- Use dynamic programming to solve this problem.
Create a dynamic programming array dp to store the results.
Initialize the base cases: dp[1] = 1 and dp[2] = 2.
- Fill the rest of the array using dynamic programming:
For each step from 3 to n, the number of distinct ways to reach the current step is the sum of the ways to reach the previous two steps: dp[i] = dp[i - 1] + dp[i - 2].
Return dp[n], which contains the number of distinct ways to reach the top step.

## Approach:
- Take input from the user for the number of steps.
- Parse the input into an integer.
- Implement the climbStairs function that takes the number of steps as input.
- Create a dynamic programming array dp to store the results.
- Initialize the base cases: dp[1] = 1 and dp[2] = 2.
- Fill the rest of the array using dynamic programming:
- For each step i from 3 to n, calculate the number of distinct ways to reach the current step by summing the ways to reach the previous two steps: dp[i] = dp[i - 1] + dp[i - 2].
- Return dp[n], which contains the number of distinct ways to reach the top step.
- Print the number of distinct ways.


## Code
[Leetcode : 70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/submissions/1018160439/)
```
/**
 * @param {number} n - The total number of steps in the staircase.
 * @return {number} - The number of distinct ways to reach the top.
 */

let cache;

function helper(n) {
    // If the result for 'n' is already calculated, return it from the dp array.
    if (dp[n]) {
        return dp[n];
    }
    
    // Base cases: If 'n' is 1 or 2, there's only 1 way or 2 ways to climb, respectively.
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    
    // Calculate the result for 'n' by adding the distinct ways for (n-1) and (n-2).
    const result = helper(n - 1) + helper(n - 2);
    
    // Store the result in the dp array for future reference.
    dp[n] = result;
    
    return result;
}

var climbStairs = function(n) {
    // Base cases: if n is 0 or 1, there's only one way to climb (0 steps or 1 step).
    if (n == 0 || n == 1)
        return n;

    // Create an array to store the number of ways to climb to each step.
    const dp = new Array(n + 1);

    dp[0] = 1;

    // There's only one way to reach the second step (1 step).
    dp[1] = 1;

    // Iterate through the remaining steps, calculating the number of ways for each step.
    for (let i = 2; i <= n; i++) {
        // The number of ways to reach the current step is the sum of the ways to reach the previous two steps.
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // The final element in the dp array contains the total number of ways to reach the nth step.
    return dp[n];
};



```