## Problem Statement:
Calculate Height of Binary Tree

## Problem Statement:
Write a function to calculate the height of a binary tree.


## Input Format:
The user will be prompted to enter the elements of the binary tree, separated by spaces.

## Output Format:
The program will output the height of the binary tree.

## Test Case 1:
Sample Input:
3 9 20 null null 15 7

Sample Output:
3


## Test Case 2:
sample input: 
10 5 20 3 8 null 25 null null null null 7

sample output:
4


## Level: Easy

## Hints:
- The height of an empty tree is 0.
The height of a tree can be calculated recursively by finding the maximum height of its left and right subtrees.
- Each recursive call will return the height of the subtree rooted at the current node.
The height of the overall tree is the maximum height among the left and right subtrees, plus 1.

## Approach:
- If the root is null, return 0 (height of an empty tree).
- Otherwise, recursively calculate the height of the left and right subtrees.
- Return the maximum height among the left and right subtrees, plus 1 (to account for the root node).

## Code
[LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/1001638402/)
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 function calHeight(node)
 {
    // if no node, height is 0
     if(!node)
     return 0
     // for leaf nodes, left and right subtree height is 0
     let lHeight = 0, rHeight = 0;
     if(node.left)
     {
        lHeight = calHeight(node.left)
     }
     if(node.right)
     {
         rHeight = calHeight(node.right)
     }
     //height at current node is max of left, or right subtree plus current(1)
    return  Math.max(lHeight,rHeight) + 1
 }
var maxDepth = function(root) {
    return (calHeight(root))

};
```