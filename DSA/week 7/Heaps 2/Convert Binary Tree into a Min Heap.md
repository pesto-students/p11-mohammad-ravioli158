## Problem Statement:
Convert Binary Tree into a Min Heap

## Problem Statement:
Write a program to convert a given binary tree into a min heap. The binary tree is represented by its in-order traversal, where -1 represents null nodes. The program should perform an in-order traversal of the binary tree, store the node values in an array, sort the array in ascending order, and reconstruct a new binary tree that represents a min heap.


## Input Format:
The user is prompted to enter the elements of the binary tree in in-order traversal, separated by spaces. Use -1 to represent null nodes.


## Output Format:
The program prints the in-order traversal of the converted min heap.



## Test Case 1:
Sample Input:
1 2 3 4 5 6 7

Sample Output:
1 2 3 4 5 6 7

## Test Case 2:
sample input: 
5 3 8 1 4

sample output:
1 3 4 5 8

## Level: Medium

## Hints:
- Perform an in-order traversal of the binary tree and store the node values in an array.
Sort the array in ascending order.
- Construct a new min heap from the sorted array.


## Approach:
- Take input from the user as the elements of the binary tree in in-order traversal, separated by spaces.
- Implement the convertToMinHeap function that takes the root of the binary tree as input.
- Perform an in-order traversal of the binary tree and store the node values in an array.
- Sort the array in ascending order.
- Construct a new min heap from the sorted array using the constructMinHeap function.
- Implement the buildBinaryTree function to build the binary tree from the in-order traversal array.
- Implement the printInorder function to print the in-order traversal of a binary tree.
- Print the in-order traversal of the converted min heap.


## Code
```
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function convertToMinHeap(inorder) {
  // Helper function to construct a binary tree from sorted array
  function buildBinaryTree(arr, start, end) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(arr[mid]);

    root.left = buildBinaryTree(arr, start, mid - 1);
    root.right = buildBinaryTree(arr, mid + 1, end);

    return root;
  }

  // Sort the in-order traversal array in ascending order
  const values = [...inorder];
  values.sort((a, b) => a - b);

  // Construct a new binary tree that represents the min heap
  const minHeapRoot = buildBinaryTree(values, 0, values.length - 1);

  // Perform in-order traversal on the min heap and store node values in an array
  const minHeapInorder = [];
  function inorderTraversal(node) {
    if (node !== null) {
      inorderTraversal(node.left);
      minHeapInorder.push(node.val);
      inorderTraversal(node.right);
    }
  }
  inorderTraversal(minHeapRoot);

  return minHeapInorder;
}

function createBinaryTree(elements) {
  if (!elements || elements.length === 0) {
    return null;
  }

  const root = new TreeNode(elements[0]);
  const queue = [root];
  let i = 1;

  // Construct the binary tree using level order traversal
  while (queue.length > 0) {
    const node = queue.shift();

    if (i < elements.length && elements[i] !== -1) {
      node.left = new TreeNode(elements[i]);
      queue.push(node.left);
    }
    i++;

    if (i < elements.length && elements[i] !== -1) {
      node.right = new TreeNode(elements[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7];
const root = createBinaryTree(arr);
const output = convertToMinHeap(arr);

console.log("Output In-order Traversal of the Converted Min Heap:", output);

```