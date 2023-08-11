## Problem Statement:
Climbing Stairs

## Problem Statement:
Write a program to find the number of unique paths to reach the bottom-right corner of an m x n grid, starting from the top-left corner and moving only right or down. Your task is to calculate the number of unique paths.

## Input Format:
The user is prompted to enter the number of rows.
The user is prompted to enter the number of columns.

## Output Format:
The program prints the number of unique paths to reach the bottom-right corner.


## Test Case 1:
Sample Input:
- 3
- 7

Sample Output:
28

## Test Case 2:
sample input: 
- 7
- 3

sample output:
28

## Level: Easy

## Hints:
- Use dynamic programming to solve this problem.
Create a dynamic programming array dp to store the results.
Initialize the base cases:
There is only one way to reach any cell in the first row or first column.
- Fill the rest of the array using dynamic programming:
For each cell (i, j) from (1, 1) to (m, n), the number of unique paths to reach the current cell is the sum of the paths from the cell above and the cell to the left: dp[i][j] = dp[i - 1][j] + dp[i][j - 1].
Return dp[m - 1][n - 1], which contains the number of unique paths to reach the bottom-right corner.

## Approach:
- Take input from the user for the number of rows and the number of columns.
- Parse the inputs into integers.
- Implement the uniquePaths function that takes the number of rows and the number of columns as input.
- Create a dynamic programming array dp of size m x n to store the results.
- Initialize the base cases:
- There is only one way to reach any cell in the first row or first column: dp[i][0] = 1 and dp[0][j] = 1 for all i and j.
- Fill the rest of the array using dynamic programming:
- For each cell (i, j) from (1, 1) to (m, n), calculate the number of unique paths to reach the current cell by summing the paths from the cell above and the cell to the left: dp[i][j] = dp[i - 1][j] + dp[i][j - 1].
- Return dp[m - 1][n - 1], which contains the number of unique paths to reach the bottom-right corner.
- Print the number of unique paths.


## Code
[Leetcode 62](https://leetcode.com/problems/unique-paths/submissions/1018327026/)
```
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let cache;
function helper(i,j,m,n){
    const key = `${i},${j}`
    if(cache[key] !== undefined)
    return cache[key]
    if(i == m-1 && j == n-1)
    {
        // You have reached the end
        return 1
    }

    let down = 0, right = 0
    if(i+1 < m){
        // Can move down
        down = helper(i+1, j, m, n)
    }

    //If can move right
    if(j+1 < n) {
        right = helper(i, j+1, m, n)
    }
    cache[key] = down+right
    return down+right
}
var uniquePaths = function(m, n) {
    // Recursive Approach
    // cache = []
    // return helper(0,0,m,n)

     // Initialize a 2D array for dynamic programming, where dp[i][j] represents
    // the number of unique paths to reach cell (i, j) from the top-left corner.
    let dp = [...Array(m)].map(() => Array(n));

    // There's only one way to reach the top-left corner, so initialize it as 1.
    dp[0][0] = 1;

    // Iterate through the grid cells to calculate unique paths for each cell.
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== 0 || j !== 0) {
                let left = 0;
                let up = 0;

                // Calculate the number of unique paths by considering paths from the left and above cells.
                if (i - 1 >= 0) {
                    up = dp[i - 1][j];
                }
                if (j - 1 >= 0) {
                    left = dp[i][j - 1];
                }

                // The total unique paths to the current cell are the sum of paths from the left and above cells.
                dp[i][j] = left + up;
            }
        }
    }

    // Return the number of unique paths to the bottom-right corner.
    return dp[m - 1][n - 1];
};
```