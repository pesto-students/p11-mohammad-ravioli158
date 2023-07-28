## Problem Name:
Horse Race

## Problem Statement:
You are given a list of N horses, and each horse 
has a certain strength value. You need to find the 
horse with the maximum strength value. However, 
you can only compare two horses at a time in a 
race. You can organize a maximum of K races to 
determine the horse with the maximum strength 
value. Write a program to find the horse with the 
maximum strength value using binary search.


## Input Format:
The first line of input contains two 
space-separated integers: 
N (the number of horses) and 
K (the maximum number of races allowed).
The second line of input contains N 
space-separated integers denoting the 
strength values of the horses.

## Output Format:
A single integer 
representing the index 
of the horse with the 
maximum strength value.

## Test Case 1:
Sample Input:
5 2
4 2 7 5 1

Sample Output
2

## Test Case 2:
Sample input:
6 3
9 4 8 2 6 5

Sample output:
0

## Level: Medium

## Hints:
- Think about how binary search
 can be used to find the maximum 
strength value with the given constraints.

- Consider splitting the horses into groups and 
organizing races between the groups.
Determine the winner of each race and 
continue organizing races until you have the 
horse with the maximum strength value.

## Approach:
Parse the input to retrieve the values of N, K, and the strength values of the horses.
Define a function race(groups) that takes a list of groups of horses and returns 
the index of the horse with the maximum strength value.
In the race function, if there is only one group remaining, return the index of the horse 
with the maximum strength value in that group.
Divide the list of groups into two subgroups.
Recursively call the race function on each subgroup and store the results.
Determine the winners of the races between the subgroups.
If K is greater than 1, decrement K by 1 and repeat steps 4-7 until K becomes 1.
Return the index of the horse with the maximum strength value from the final race.

```
function findMaxStrengthHorse(N, K, strengths) {
  function race(groups) {
    if (groups.length === 1) {
      // Only one group remaining, return the index of the horse with maximum strength
      return groups[0].indexOf(Math.max(...groups[0]));
    }

    // Divide the list of groups into two subgroups
    const mid = Math.floor(groups.length / 2);
    const group1 = groups.slice(0, mid);
    const group2 = groups.slice(mid);

    // Recursively call the race function on each subgroup
    const winner1 = race(group1);
    const winner2 = race(group2);

    // Determine the winners of the races between the subgroups
    return groups[winner1][0] > groups[winner2][0] ? winner1 : winner2;
  }

  // Initialize the groups with all horses
  let groups = [strengths];

  // Repeat organizing races until K becomes 1
  while (K > 1) {
    // Divide the horses into groups
    const newGroups = [];
    for (let i = 0; i < groups.length; i += 2) {
      if (i + 1 < groups.length) {
        newGroups.push(groups[i].concat(groups[i + 1]));
      } else {
        newGroups.push(groups[i]);
      }
    }

    // Update the groups
    groups = newGroups;
    K--;
  }

  // Call the race function to find the horse with the maximum strength value
  const winnerIndex = race(groups);

  // Return the index of the winning horse
  return winnerIndex;
}

// Example usage
// const N = 5;
// const K = 2;
// const strengths = [4, 2, 7, 5, 1];
const N = 6;
const K = 3;
const strengths = [9, 4, 8, 2, 6, 5];
const winnerIndex = findMaxStrengthHorse(N, K, strengths);
console.log(winnerIndex);

```