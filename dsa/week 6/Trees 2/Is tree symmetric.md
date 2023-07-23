## Problem Statement:
Is tree symmetric ?

## Problem Statement:
Check if a given tree is symmetric


## Input Format:
space separated integers

## Output Format:
The output will be displayed using console.log() statements in JavaScript. It will display whether the tree is symmetric or not.

## Test Case 1:
Sample Input:
1 2 2 3 4 4 3

Sample Output:
The tree is symmetric


## Test Case 2:
sample input: 
1 2 2 null 3 null 3

sample output:
The tree is symmetric

## Level: Easy

## Hints:
- A symmetric tree is a tree where the left subtree is the mirror image of the right subtree.
- The comparison should be done level by level, comparing the corresponding nodes.
Use a recursive approach to check if the subtrees are symmetric.

## Approach:
- Create a recursive function that takes two tree nodes as input.
- Check if both nodes are null. If so, return true as it means the subtrees are symmetric.
- Check if one of the nodes is null. If so, return false as it means the subtrees are not symmetric.
- Check if the values of the two nodes are equal. If not, return false.
- Recursively check if the left subtree of one node is symmetric to the right subtree of the other node, and vice versa.
-   Return true if both conditions are satisfied.


## Code
[Leetcode 101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/submissions/993233412/)

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
 * @return {boolean}
 */
function isSymmtericHelper(root1, root2)
{
    //base case both null
    if(root1 == null && root2 == null){
        return true
    }
    //if one of the node is null, they cant be symmetric
    if(root1 == null || root2 == null){
        return false
    }
    //Recursilvelry check if roots are same and left of root1 and right of root1 are symmetric, likewise for right of 1st and //left of 2nd
    if(root1.val == root2.val && isSymmtericHelper(root1.left,root2.right) && isSymmtericHelper(root1.right, root2.left)){
        return true
    }
    return false
}

var isSymmetric = function(root) {

    return isSymmtericHelper(root,root)   

};
```