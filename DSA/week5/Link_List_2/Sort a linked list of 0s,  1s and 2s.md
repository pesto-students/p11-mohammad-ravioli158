## Problem Name:
Sort a linked list of 0s, 1s and 2s

## Problem Statement:
Given a linked list of 0s, 1s and 2s, 
The task is to sort and print it.


## Input Format:
The program takes input from the user in the 
following format:

The user is prompted to enter elements 
(space-separated) to insert into the linked list. 
Only values of 0, 1, and 2 are allowed.

## Output Format:
The program displays the 
sorted linked list after 
performing the sorting 
operation.

## Test Case 1:
sample Input
1 0 2 1 2 0

Sample Output
0 0 1 1 2 2

## Test Case 2:
Sample input:
1 2 0 2 1

Sample output:
0 1 1 2 2

## Level: Easy

## Hints:
- Traverse the linked list and count the 
occurrences of 0s, 1s, and 2s, storing the counts 
in an array.

- Traverse the linked list again, replacing the 
node values with 0s, 1s, and 2s based on the 
count array.


## Approach:
Create a Node class to represent a node in the linked list. Each node should have a 
data property and a next pointer to the next node.
Create a LinkedList class with a head pointer initially set to null.
Implement the insert method in the LinkedList class to add elements to the linked list. 
If the head is null, set the head to the new node; otherwise, traverse the list until the 
last node and append the new node.
Implement the sortLinkedList method in the LinkedList class to sort the linked list. 
Use the counting sort algorithm to count the occurrences of 0s, 1s, and 2s and update the linked list accordingly.
Implement the display method in the LinkedList class to display the linked list values.
Prompt the user to enter elements (0s, 1s, and 2s only) to insert into the linked list.
Call the sortLinkedList method to sort the linked list.
Display the sorted linked list using the display method.

## Code
```
class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}


function main() {

    const n = parseInt(readLine())
    let nodes = readLine().split(' ')
    

    let zeroStart = null, zeroEnd = null;
    let oneStart = null, oneEnd = null;
    let twoStart = null, twoEnd = null;

    for (let val of nodes)
    {
        const newNode = new Node(val)
        switch (val)
        {
            case '0':
                if (zeroStart == null)
                {
                    zeroStart = newNode
                    zeroEnd = newNode
                } else {
                    zeroEnd.next = newNode
                    zeroEnd = newNode
                }
                break;
            case '1':
                 if (oneStart == null)
                {
                    oneStart = newNode
                    oneEnd = newNode
                } else {
                    oneEnd.next = newNode
                    oneEnd = newNode
                }
                break;
            case '2':
                 if (twoStart == null)
                {
                    twoStart = newNode
                    twoEnd = newNode
                } else {
                    twoEnd.next = newNode
                    twoEnd = newNode
                }
                break;
        }
    }

    //zero start is the result
    // connect zeros to 1s and 1s to 2s
    zeroEnd.next = oneStart
    oneEnd.next = twoStart
    let result = ''
    while (zeroStart)
    {
        result += " "+zeroStart.val
        zeroStart = zeroStart.next
    }
    console.log(result.trim())
    //return result
    
}
```