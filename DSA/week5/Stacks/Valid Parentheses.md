## Problem Name:
Valid Parentheses

## Problem Statement:
Write a JavaScript function that takes a string 
containing only parentheses ('(', ')', '{', '}', '[', ']') and 
returns true if the parentheses are valid and 
balanced, and false otherwise.

Implement the function to validate the parentheses 
string and use prompt to take input from the user.


## Input Format:
Input:
The program should prompt the user to enter a 
string containing parentheses.

## Output Format:
Output:
The program should display true 
if the parentheses are valid and 
balanced, and false otherwise.

## Test Case 1:
sample Input
(){}

Sample Output
true

## Test Case 2:
Sample input:
((()))

Sample output:
true

## Level: Easy

## Hints:
- Use a stack to keep track of the opening parentheses encountered.
Iterate through the string.
If an opening parenthesis is encountered, push it onto the stack.

- If a closing parenthesis is encountered, check 
if the stack is empty. If it is, return false.
If the stack is not empty, pop the top element 
and check if it matches the closing parenthesis. 
If it doesn't, return false.
After iterating through the string, if the stack is 
empty, return true. Otherwise, return false.


## Approach:
Create an empty stack.
Prompt the user to enter a string containing parentheses.
Iterate through each character of the string.
If the character is an opening parenthesis ('(', '{', '['), push it onto the stack.
If the character is a closing parenthesis (')', '}', ']'), check if the stack is empty. If it is, 
return false.
If the stack is not empty, pop the top element from the stack and check if it matches 
the closing parenthesis. If it doesn't, return false.
After iterating through the string, if the stack is empty, return true. Otherwise, 
return false.

[LeetCode: 20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/submissions/994301498/)

```
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {

    const stack = []

    for(let i = 0 ; i < s.length; i++){
        let char = s.charCodeAt(i)
        let top = stack[stack.length-1] ?? -1
        let diff = char - top
        if(stack.length > 0 && top !== -1 && diff >= 1 && diff <=2)
        {
            // if current character is matching parenthesis for top of  
            // stack, pop that stack
            stack.pop()
            
        }else{
            // doesnt match so push to stack
            stack.push(char)
        }
        
    }
    // return true if all parentheses matched , and therefor stack is empty
    return stack.length == 0
};
```