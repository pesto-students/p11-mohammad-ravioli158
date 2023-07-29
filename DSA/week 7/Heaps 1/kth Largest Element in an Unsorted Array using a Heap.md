## Problem Statement:
kth Largest Element in an Unsorted Array using a Heap

## Problem Statement:
Given an unsorted array of integers, write a function to find the kth largest element in the array using a heap.

## Input Format:
The user is prompted to enter the elements of the array, separated by commas.
The user is prompted to enter the value of k.

## Output Format:
The program prints the kth largest element in the array.

## Test Case 1:
Sample Input:
- 5, 2, 9, 1, 7
- 2

Sample Output:
7

## Test Case 2:
sample input: 
- 10,6,3,8,1,4
- 4

sample output:
4

## Level: Medium

## Hints:
- Build a min heap of the first k elements in the array.
Iterate over the remaining elements in the array.
- If the current element is larger than the root of the min heap, replace the root with the current element and heapify down.
The kth largest element will be the root of the min heap.

## Approach:
- Take input from the user as an array of elements and the value of k.
- Implement the findKthLargest function that takes the array and k as input.
- Build a min heap of the first k elements using the buildMinHeap function.
- Iterate over the remaining elements in the array from index k.
- If the current element is larger than the root of the min heap, replace the root with the current element and perform heapify down using the heapify function.
- After iterating over all the elements, the kth largest element will be the root of the min heap.
- Return the kth largest element.
- Print the kth largest element.


## Code
[Leetcode: 215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/1006551801/)

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    const heap = new MaxHeap()
    // Insert k elements to the heap
    let index

    for( index = 0; index < k; index++){
        heap.push(nums[index])
    }
    // Now we maintain top k elements while only pushing if num is larger than smallest of the k group
    while(index < nums.length){
        const num = nums[index]
        if(num > heap.peek()){
            heap.pop()
            heap.push(num)
        }
        index++
    }
    return heap.peek()

};

/**
* Heap Implementation
**/
class MinHeap{
    constructor(){
        this.arr = []
    }
     size()
    {
        return this.arr.length
    }
    peek(){
        if(this.arr.length == 0)
        return null
        else
        return this.arr[0]
    }
    // Pop: Get the minimum element
    pop(){
        if(this.arr.length == 0)
        return null
        
        //swap the root with the last element
        let lastIndex = this.arr.length -1 
        const temp = this.arr[lastIndex]
        const popVal = this.arr[0]
        this.arr[0] = temp
        this.arr.pop()
        this.heapifyDown()
        return popVal
    }
    
    // Push: Insert the new element
    push(val){
        this.arr.push(val)
        this.heapifyUp()
    }
    
    // Heapify from bottom to top, for removal
    heapifyUp(){
        let lastIndex = this.arr.length - 1
        let parentIndex = this.getParentIndex(lastIndex)
        while(lastIndex > 0 && this.arr[parentIndex] > this.arr[lastIndex]){
            //swap them
            const temp = this.arr[parentIndex]
            this.arr[parentIndex] = this.arr[lastIndex]
            this.arr[lastIndex] = temp
            lastIndex = parentIndex
            parentIndex = this.getParentIndex(lastIndex)
        }
    }
    
    // Heapify from top to bottom, for inserting
    heapifyDown(){
        let current = 0
        
        //move from top to bottom until they are smaller
        let minIndex = current;
        let leftIndex = this.getLeftChildIndex(current)
        let rightIndex = this.getRightChildIndex(current)
        
        if( this.arr[leftIndex] < this.arr[current])
        minIndex = leftIndex
        
        if(this.arr[rightIndex] < this.arr[minIndex])
        minIndex = rightIndex
        
        while(this.arr[current] > this.arr[minIndex]){
            // Swap
           
            const temp = this.arr[current]
            this.arr[current] = this.arr[minIndex]
            this.arr[minIndex] = temp
            
            
            // Update minindex
            current = minIndex
            leftIndex = this.getLeftChildIndex(current)
            rightIndex = this.getRightChildIndex(current)
        
            if( this.arr[leftIndex] < this.arr[current])
            minIndex = leftIndex
        
            if(this.arr[rightIndex] < this.arr[minIndex])
            minIndex = rightIndex
        }
        
    }
    isValidIndex(index){
        return  index < this.arr.length
    }
    getParentIndex(index){
        return Math.floor((index - 1)/2)
    }
    
    getLeftChildIndex(index){
        return 2 * index + 1
    }
    
    getRightChildIndex(index){
        return 2 * index + 2
    }
}
```