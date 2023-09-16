## Problem Statement:
Level Order Traversal of Binary Tree

## Problem Statement:
Write a function to print the nodes of a binary tree in a level order traversal


## Input Format:
- The number of nodes in the binary tree.
- The values of each node.
- For each node, enter the index of its left child (-1 if none).
- For each node, enter the index of its right child (-1 if none).


## Output Format:
The level order traversal of the binary tree, with each level printed on a separate line.

## Test Case 1:
Sample Input:
5
1
2
3
4
5
1
2
3
4
-1
-1
-1
-1
-1
-1

Sample Output
Level 1: 1
Level 2: 2
Level 3: 3
Level 4: 4
Level 5: 5


## Test Case 2:
sample input: 
5
1
2
3
4
5
2
3
4
-1
-1
5
-1
-1
-1
-1

sample output:
Level 1: 1
Level 2: 2, 3
Level 3: 4, 5

## Level: Medium

## Hints:
- Use a queue to perform a breadth-first traversal of the binary tree.
Start with the root node and enqueue it.
While the queue is not empty, dequeue a node and add its value to the current level.
- Enqueue the left and right children of the dequeued node (if they exist).
Repeat this process until the queue is empty.

## Approach:
- Create an empty queue and an empty result array.
- Enqueue the root node into the queue.
- While the queue is not empty, do the following:
- Dequeue a node from the front of the queue.
- Add the value of the dequeued node to the current level.
- Enqueue the left and right children of the dequeued node (if they exist).
- Add the current level to the result array.
- Repeat steps 3-4 until the queue is empty.
- Return the result array containing the level order traversal.

## Code
[102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/993366469/)

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * Print level order traversal of a binary tree.
 * @param {TreeNode[]} nodes - An array of nodes to process at a specific level.
 * @param {number[][]} result - The result array to store level order traversal.
 */
function printLevelOrder(nodes, result) {
    // If there are no nodes to process, stop the recursion.
    if (nodes.length === 0) {
        return;
    }
    
    // Create an array to store the values of nodes at the current level.
    const current = [];
    // Create a new array to store nodes of the next level.
    const newNodes = [];
    
    // Process each node at the current level.
    for (let node of nodes) {
        // Add the value of the current node to the current level's array.
        current.push(node.val);
        
        // If the current node has a left child, add it to the newNodes array for the next level.
        if (node.left) {
            newNodes.push(node.left);
        }
        
        // If the current node has a right child, add it to the newNodes array for the next level.
        if (node.right) {
            newNodes.push(node.right);
        }
    }
    
    // Add the array of values at the current level to the result array.
    result.push(current);
    
    // Recursively call printLevelOrder with the nodes of the next level.
    printLevelOrder(newNodes, result);
}

/**
 * Get the level order traversal of a binary tree.
 * @param {TreeNode} root - The root of the binary tree.
 * @return {number[][]} - An array containing the level order traversal of the binary tree.
 */
var levelOrder = function(root) {
    // If the root is null, return an empty array.
    if (!root) {
        return [];
    }
    
    // Create an empty array to store the level order traversal result.
    const result = [];
    
    // Start the level order traversal from the root node, passing it in an array.
    printLevelOrder([root], result);
    
    // Return the level order traversal result.
    return result;
};

```
