## Problem Statement:
Maximum Product Subarray - Contiguous Subarray with the Largest Product

## Problem Statement:
Write a program to find the contiguous subarray within an array of integers that has the largest product. Your task is to calculate the maximum product of the subarray.

## Input Format:
The user is prompted to enter an array of integers, separated by spaces.


## Output Format:
The program prints the maximum product subarray.


## Test Case 1:
Sample Input:
2 3 -2 4

Sample Output:
6

## Test Case 2:
sample input: 
-2 3 -4

sample output:
24

## Level: Medium

## Hints:
- Use dynamic programming to solve this problem.
Keep track of both the maximum and minimum products seen so far, as a negative number multiplied by a negative number can become the maximum product.
- Iterate through the array and update the maximum and minimum products at each step.
Update the result if necessary.
Return the maximum product.

## Approach:
- Take input from the user as a space-separated array of integers.
- Parse the input into an array of integers.
- Implement the maxProductSubarray function that takes the array of integers as input.
- Initialize variables maxProduct, minProduct, and result to store the maximum and minimum products seen so far and the final result, respectively.
- Iterate through the array starting from the second element.
- If the current number is negative, swap the maximum and minimum products.
- Update the maximum and minimum products by comparing the current number with the product of the previous maximum/minimum product and the current number.
- Update the result by comparing it with the current maximum product.
- Return the maximum product as the result.
- Print the maximum product subarray.

## Code




```
/**
 * Finds the maximum product of any subarray within the given array of integers.
 * @param {number[]} nums - The input array of integers.
 * @return {number} - The maximum product of subarrays.
 */
var maxProduct = function(nums) {
    const n = nums.length;
    let maxProductEndingHere = nums[0]; // Maximum product ending at the current index
    let minProductEndingHere = nums[0]; // Minimum product ending at the current index
    let maxProductSoFar = nums[0]; // Maximum product found so far
    
    for (let i = 1; i < n; i++) {
        // To handle negative numbers, swap maxProductEndingHere and minProductEndingHere
        if (nums[i] < 0) {
            [maxProductEndingHere, minProductEndingHere] = [minProductEndingHere, maxProductEndingHere];
        }
        
        // Update maxProductEndingHere and minProductEndingHere using the current element
        maxProductEndingHere = Math.max(nums[i], maxProductEndingHere * nums[i]);
        minProductEndingHere = Math.min(nums[i], minProductEndingHere * nums[i]);

        // Update maxProductSoFar with the maximum value found so far
        maxProductSoFar = Math.max(maxProductSoFar, maxProductEndingHere);
    }
    
    return maxProductSoFar; // Return the maximum product of subarrays.
};

```