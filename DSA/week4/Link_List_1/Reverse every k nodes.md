## Problem Name:
Reverse every k nodes

## Problem Statement:
Implement a JavaScript function to reverse every k nodes in a linked list.


## Input Format:
The first line input contains spaced-separated 
integers representing the elements of an array.

The second line contains a positive integer k.

## Output Format:
The output should be an 
array representing the 
modified linked list after 
reversing every k nodes.

## Test Case 1:
sample Input
1 2 3 4 5 6 7 8
3

Sample Output
[3, 2, 1, 6, 5, 4, 8, 7]

## Test Case 2:
1 2 3 4 5
2

Sample output:
[2, 1, 4, 3, 5]

## Level: Medium

## Hints:
- Traverse the linked list in chunks of size k.
Reverse each chunk of nodes.

- Connect the reversed chunks to form the 
final modified linked list.

## Approach:
Create a function to reverse a linked list.
Create a function to reverse every k nodes in a linked list.
Initialize a pointer to the head of the linked list.
Traverse the linked list in chunks of size k:
Reverse each chunk using the reverse function.
Connect the reversed chunk to the previous chunk (if any).
Update the pointers accordingly.
Return the modified linked list.

## Code
[LeetCode: Reverse nodes in k group](https://leetcode.com/problems/reverse-nodes-in-k-group/submissions/985983376/)

```
  /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Function to calculate the length of a linked list.
 * @param {ListNode} head - The head of the linked list.
 * @returns {number} - The length of the linked list.
 */
function lengthOf(head) {
    let current = head;
    let count = 0;
    while (current) {
        count++;
        current = current.next;
    }
    return count;
}

/**
 * Reverses the linked list in groups of k nodes.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} k - The group size.
 * @returns {ListNode} - The head of the reversed linked list.
 */
var reverseKGroup = function(head, k) {
    const len = lengthOf(head); // Get the length of the linked list

    let current = head;
    let previous = null;
    let count = 0;
    let prevList = null;
    let start = head;
    let groupCount = 0;

    while (current && count < k && groupCount < Math.floor(len / k)) {
        const temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
        count++;

        if (count === k) {
            if (prevList) {
                prevList.next = previous;
            } else {
                head = previous;
            }
            start.next = current;
            prevList = start;
            count = 0;
            groupCount++;
            start = current;
        }
    }

    return head;
};

```