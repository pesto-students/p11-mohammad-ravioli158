## Problem Statement:
Lowest Common Ancestor

## Problem Statement:
Implement a function to find the lowest common ancestor of two nodes in a binary tree


## Input Format:
- The number of nodes in the binary tree
- The value of each node in level order
- The value of the first node
- The value of the second node

## Output Format:
The value of the lowest common ancestor of the two nodes

## Test Case 1:
Sample Input:
7
3
5
1
6
2
0
8
5
1


Sample Output:
The lowest common ancestor of nodes 5 and 1 is 3.


## Test Case 2:
sample input: 
5
1
2
3
4
5
2
4

sample output:
The lowest common ancestor of nodes 2 and 4 is 2.

## Level: Easy

## Hints:
- The lowest common ancestor of two nodes in a binary tree is the deepest node that has both nodes as descendants.
The function can be implemented recursively by traversing the tree in a bottom-up manner.
The recursive function should return null if the current node is null or if it matches either of the two nodes.
Otherwise, recursively call the function on the left and right subtrees.
- If both subtrees return non-null values, it means the current node is the lowest common ancestor.
If only one subtree returns a non-null value, it means the lowest common ancestor is in that subtree.
If both subtrees return null, the lowest common ancestor is not found in the current subtree.

## Approach:
- Create a Node class to define the structure of each node in the binary tree.
- Implement the lowestCommonAncestor function to find the lowest common ancestor.
- Prompt the user for the number of nodes in the binary tree and the values of each node in level order.
- Prompt the user for the values of the two nodes for which the lowest common ancestor needs to be found.
- Create the binary tree using the input values.
- Call the lowestCommonAncestor function with the root node and the two nodes to find the lowest common ancestor.- 
- Print the value of the lowest common ancestor.



## Code
[Leetcode 236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/998995317/)
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


var lowestCommonAncestor = function(root, p, q) {
    // If the root is null or either p or q is the root, then the LCA is the root itself.
    if (!root || root === p || root === q) {
        return root;
    }

    // Recursively search for the LCA in the left subtree.
    let left = lowestCommonAncestor(root.left, p, q);
    // Recursively search for the LCA in the right subtree.
    let right = lowestCommonAncestor(root.right, p, q);

    // If one of the subtrees returned null, it means neither p nor q was found in that subtree.
    // In that case, the LCA must be in the other subtree that returned a non-null result.
    if (!left) {
        return right;
    } else if (!right) {
        return left;
    } else {
        // If both subtrees returned a non-null result, it means p and q were found in different subtrees,
        // and the current root is their lowest common ancestor.
        return root;
    }
};

```