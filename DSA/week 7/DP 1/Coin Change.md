## Problem Statement:
Coin Change

## Problem Statement:
Write a program to find the minimum number of coins required to make the change for a given target amount using a set of coin denominations. You have an unlimited supply of coins of each denomination. Your task is to determine the minimum number of coins needed to make the change, or return -1 if it is not possible to make the change using the given denominations.


## Input Format:
The user is prompted to enter the coin denominations as a space-separated string of integers.
The user is prompted to enter the target amount asa single integer.

## Output Format:
The program prints the minimum number of coins required to make the change.


## Test Case 1:
Sample Input:
1 2 5
11

Sample Output:
3


## Test Case 2:
sample input: 
2
3

sample output:
-1


## Level: Easy

## Hints:
- Use dynamic programming to solve this problem.
Create an array dp to store the minimum number of coins needed for each amount.
Initialize dp[0] as 0 and all other elements as Infinity.
Iterate through each amount from 1 to the target amount.
- For each amount, iterate through each coin denomination.
If the coin denomination is less than or equal to the current amount, check if using that coin denomination results in a smaller number of coins than the current minimum. If so, update the minimum.
After the iterations, dp[amount] will contain the minimum number of coins required for the target amount.
Return dp[amount] if it is not Infinity, otherwise return -1.

## Approach:
- Take input from the user for the coin denominations and the target amount.
- Split the input string of coin denominations into an array of integers.
- Parse the target amount into an integer.
- Implement the coinChange function that takes the coin denominations array and the target amount as input.
- Create an array dp to store the minimum number of coins needed for each amount.
- Initialize dp[0] as 0 and all other elements as Infinity.
- Iterate through each amount from 1 to the target amount.
- For each amount, iterate through each coin denomination.
- If the coin denomination is less than or equal to the current amount, check if using that coin denomination results in a smaller number of coins than the current minimum. If so, update the minimum.
- After the iterations, dp[amount] will contain the minimum number of coins required for the target amount.
- Return dp[amount] if it is not Infinity, otherwise return -1.
- Print the minimum number of coins required.

## Code
[322. Coin Change](https://leetcode.com/problems/coin-change/submissions/1015389439/)

```
/**
 * This function, `coinChange`, aims to calculate the minimum number of coins required to make up a given amount
 * using a set of different coin denominations.
 * 
 * @param {number[]} coins - An array of coin denominations available.
 * @param {number} amount - The target amount that needs to be made up using the given coins.
 * @return {number} - The minimum number of coins required to make up the given amount. Returns -1 if it's not possible.
 */

var coinChange = function(coins, amount) {
    // Create an array `dp` to store the minimum number of coins required for each amount from 0 to `amount`.
    const dp = new Array(amount + 1);
    
    // Initialize the base case: To make amount 0, zero coins are needed.
    dp[0] = 0;
    
    // Iterate over each amount from 1 to `amount` to calculate the minimum coins needed.
    for (let i = 1; i <= amount; i++) {
        // Initialize `minCoins` to a very large value.
        let minCoins = Number.POSITIVE_INFINITY;
        
        // Iterate over each coin denomination to find the minimum number of coins needed for the current amount.
        for (let coin of coins) {
            // Check if the coin denomination is smaller or equal to the current amount, and
            // if using this coin leads to a smaller number of coins needed than the current `minCoins`.
            if (coin <= i && dp[i - coin] < minCoins) {
                minCoins = dp[i - coin];
            }
        }
        
        // Store the minimum number of coins needed for the current amount.
        dp[i] = 1 + minCoins;
    }
    
    // If it's not possible to make up the given amount using the available coins, return -1.
    // Otherwise, return the minimum number of coins needed for the given amount.
    return (dp[amount] === Number.POSITIVE_INFINITY) ? -1 : dp[amount];
};

```