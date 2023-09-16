## Problem Statement:
Egg Drop Problem

## Problem Statement:
Write a program to solve the Egg Drop Problem and determine the minimum number of attempts needed to find the highest floor from which an egg can be dropped without breaking. You are given a certain number of eggs and a certain number of floors. Your task is to find the minimum number of attempts required to determine the highest floor from which an egg can be dropped without breaking.


## Input Format:
The number of eggs as an integer.
The number of floors as an integer.


## Output Format:
The minimum number of attempts needed to find the highest safe floor.



## Test Case 1:
Sample Input:
2
10

Sample Output:
4


## Test Case 2:
sample input: 
3
14

sample output:
4


## Level: Medium

## Hints:
- Use dynamic programming to solve this problem.
Create a dynamic programming matrix dp to store the results.
Base cases:
If there are no floors, no attempts are needed.
If there is only one floor, one attempt is needed.
If there is only one egg, attempts needed are equal to the number of floors.
- Fill the rest of the matrix using dynamic programming:
For each number of eggs and floors, calculate the minimum number of attempts needed.
Iterate through all possible floors to drop the egg.
Determine the maximum attempts needed among the two possibilities: egg breaks or egg doesn't break.
Take the minimum of these maximum attempts.
Return dp[eggs][floors], which contains the minimum number of attempts.


## Approach:
- Take input from the user for the number of eggs and the number of floors.
- Parse the inputs into integers.
- Implement the eggDrop function that takes the number of eggs and the number of floors as input.
- Create a dynamic programming matrix dp to store the results.
- Initialize the base cases:
- If there are no floors, no attempts are needed: dp[i][0] = 0 for all i.
- If there is only one floor, one attempt is needed: dp[i][1] = 1 for all i.
- If there is only one egg, attempts needed are equal to the number of floors: dp[1][j] = j for all j.
- Fill the rest of the matrix using dynamic programming:
- For each number of eggs i from 2 to the given number of eggs:
- For each number of floors j from 2 to the given number of floors:
- Initialize dp[i][j] as Infinity.
- Iterate through all possible floors k to drop the egg, from 1 to j.
- Calculate the number of attempts needed if the egg breaks or if it doesn't break.
- Determine the maximum attempts needed among these two possibilities.
- Take the minimum of these maximum attempts and assign it to dp[i][j].
- Return dp[eggs][floors], which contains the minimum number of attempts.
- Print the minimum number of attempts.

## Code

```
function eggDrop(n, k)
    { 
        // Dynamic Programming Approach
        // dp[i][j]: returns minimum number of attempts for i eggs for j floors
        
        const dp = Array.from({length: n+1}, () => {return new Array(k+1)})
        
        
        // Base cases
        
        // For 0 floor or 1 floor we can only try 0 or 1 time respectively
        
        for(let egg = 0; egg < dp.length; egg++){
            dp[egg][0] = 0
            dp[egg][1] = 1
        }
        
        // for 0 egg, we can only try 0 times
        for(let floor = 0; floor < dp[0].length; floor++)
        {
            dp[0][floor] = 0
            dp[1][floor] = floor
        }
        
        
        for(let egg = 2; egg <= n; egg++){
            for(let floor = 1; floor <= k; floor++){
                // Calculate dp[eggs][floors]
                
                let min = Number.POSITIVE_INFINITY
                for(let i = 1; i<=floor ;i++){
                    // take min of each cases of dropping from floor 1 to current floor
                    min = Math.min(min,Math.max( 1+dp[egg-1][i-1], 1+dp[egg][floor-i]))
                }
                dp[egg][floor] = min
                
            }
        }
        
        return dp[n][k]
    }
    
    console.log(eggDrop(2,10))
```
