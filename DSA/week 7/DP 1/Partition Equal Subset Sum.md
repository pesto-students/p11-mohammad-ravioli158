## Problem Statement:
Partition Equal Subset Sum

## Problem Statement:
Write a program to determine if a given set of positive integers can be partitioned into two subsets with equal sum. Your task is to check if it is possible to divide the set into two non-empty subsets, such that the sum of elements in each subset is the same.

## Input Format:
The user is prompted to enter the set of positive integers as a space-separated string.


## Output Format:
The program prints whether the set can be partitioned into two equal-sum subsets or not.



## Test Case 1:
Sample Input:
1 5 11 5

Sample Output:
true


## Test Case 2:
sample input: 
1 2 3 4 5 6 7

sample output:
true


## Level: Medium

## Hints:
- Use dynamic programming to solve this problem.
Calculate the total sum of the numbers in the set.
If the total sum is odd, it cannot be divided into two equal subsets, so return false.
Calculate the target sum for each subset, which is half of the total sum.
Create a dynamic programming array dp to store the results.
Initialize dp[0] as true since an empty subset can have a sum of 0.
- Iterate through each number in the set.
Iterate from the target sum down to the current number.
Check if including the current number can reach the current sum.
After the iterations, dp[targetSum] will contain the result for the target sum.
Return dp[targetSum].


## Approach:
- Take input from the user for the set of positive integers.
- Split the input string of positive integers into an array of integers.
- Implement the canPartition function that takes the set of positive integers as input.
- Calculate the total sum of the numbers in the set.
- If the total sum is odd, it cannot be divided into two equal subsets, so return false.
- Calculate the target sum for each subset, which is half of the total sum.
- Create a dynamic programming array dp to store the results.
- Initialize dp[0] as true since an empty subset can have a sum of 0.
- Iterate through each number in the set.
- Iterate from the target sum down to the current number.
- Check if including the current number can reach the current sum.
- After the iterations, dp[targetSum] will contain the result for the target sum.
- Return dp[targetSum].
- Print whether the set can be partitioned into two equal-sum subsets.

## Code
[416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/submissions/1017457634/)

```
/**
 * This function checks if it's possible to partition the given array into two subsets
 * with equal sum using a dynamic programming approach.
 * @param {number[]} arr - The input array of numbers to be partitioned.
 * @return {boolean} - Returns true if the array can be partitioned into two equal-sum subsets, false otherwise.
 */
/**
 * This function checks if it's possible to partition the given array into two subsets
 * with equal sum using a dynamic programming approach.
 * @param {number[]} arr - The input array of numbers to be partitioned.
 * @return {boolean} - Returns true if the array can be partitioned into two equal-sum subsets, false otherwise.
 */
const canPartition = (arr) => {
    // Calculate the sum of all elements in the array
    const sum = arr.reduce((total, num) => total += num, 0);
    
    // Array cannot be partitioned into equal sums if the total sum is odd
    if (sum % 2 !== 0) {
        return false;
    }
    
    // dp[index][target] signifies if it is possible to form 'target' from elements until index 
    const dp = Array.from({ length: arr.length }, () => new Array(sum / 2 + 1).fill(false));

    // It is always possible to form 0
    for (let row = 0; row < dp.length; row++) {
        dp[row][0] = true;
    }

    for (let i = 0; i < dp.length; i++) {
        for (let target = 1; target <= sum / 2; target++) {
            // Set dp[index][target]
            
            // If it's possible to form the target without using the current element
            if (i >= 1 && dp[i - 1][target] == true) {
                dp[i][target] = true;
            }
            
            // If the current element is equal to the target
            if (arr[i] == target) {
                dp[i][target] = true;
            }
            
            // If the current element is less than or equal to the target and using the
            // current element along with previous elements can form the remaining target
            if (arr[i] <= target && i >= 1 && dp[i - 1][target - arr[i]] == true) {
                dp[i][target] = true;
            }
        }
    }
    
    // The final cell in the DP table represents whether it's possible to form half of the total sum
    // using the elements in the array
    return dp[arr.length - 1][sum / 2];
};

```