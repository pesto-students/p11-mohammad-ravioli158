## Problem Statement:
Word Break - Check if a String can be Segmented into Dictionary Words

## Problem Statement:
Write a program to determine if a given string can be segmented into a space-separated sequence of words from a dictionary. You are given a dictionary of words, and your task is to determine if the string can be split into multiple words, such that each word is present in the dictionary.


## Input Format:
The user is prompted to enter the string.
The user is prompted to enter the dictionary words as a space-separated string.

## Output Format:
The program prints whether the string can be segmented into dictionary words or not.


## Test Case 1:
Sample Input:
applepenapple
apple pen

Sample Output:
true


## Test Case 2:
sample input: 
pineapplepenapple
apple pen pineapple

sample output:
true


## Level: Medium

## Hints:
- Use dynamic programming to solve this problem.
Create a dynamic programming array dp to store the results.
Initialize dp[0] as true since the empty string is always present in the dictionary.
Iterate through each character of the string and check if the substring up to the current character can be segmented.
- Use a nested loop to check all possible substrings and update dp[i] if a matching word is found in the dictionary.
After the iterations, dp[s.length] will contain the result for the entire string.
Return dp[s.length].


## Approach:
- Take input from the user for the string to be checked and the dictionary words.
- Split the input string of dictionary words into an array of strings.
- Implement the wordBreak function that takes the string and the dictionary words as input.
- Create a dynamic programming array dp to store the results.
- Initialize dp[0] as true since the empty string is always present in the dictionary.
- Iterate through each character of the string.
- Check if the substring up to the current character can be segmented by iterating through all possible substrings.
- If a matching word is found in the dictionary, update dp[i] to true.
- After the iterations, dp[s.length] will contain the result for the entire string.
- Return dp[s.length].
- Print the result.
## Code
[Leetcode: 139. Word Break](https://leetcode.com/problems/word-break/submissions/1018148765/)
```
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 let cache;

 // Recursive Approach
function helper(s,dict){
    if(cache[s] !== undefined)
    return cache[s]
    if(s == '')
    return true
    let word = ''
    let result = false
    for(let l = 0; l < s.length; l++){

        word += s[l]
        if(dict.includes(word)){
            result = result || helper(s.slice(l+1),dict)
        }

    }
    cache[s] = result
    return result
}
var wordBreak = function(s, wordDict) {
    // cache = {}
    // return helper(s,wordDict)

    // Dynamic Programming Approach
    // dp[i] signifies if until index i , string can be broken to form words given in word dictionary
    const dp = new Array(s.length)
    // for each length of string, we check if until given index string can be broken in words
    for(let i  = 0; i < dp.length; i++){
        let result = false;
        if(wordDict.includes(s.slice(0,i+1))){
            //If String from 0 to i is in the dictionary
            result = true

        }else{
            // Check all the pair of string that can be formed, return true even if one pair works
            for(let j = 0; j < i && result !== true; j++){

                result = result || (dp[j] && wordDict.includes(s.slice(j+1,i+1))) 
        }
        }

        dp[i] = result
    }
    // Last index is for the complete length of the string and stores result
    return dp[s.length-1]
};
```
