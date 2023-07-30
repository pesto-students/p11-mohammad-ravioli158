## Problem Statement:
Sort an Array using a Min Heap

## Problem Statement:
Write a program to sort an array of integers using a min heap. The array can contain both positive and negative integers. The program should use a min heap data structure to efficiently sort the array in ascending order.


## Input Format:
The user is prompted to enter the elements of the array, separated by spaces.


## Output Format:
The program prints the sorted array, with elements separated by spaces.


## Test Case 1:
Sample Input:
5 2 9 1 7

Sample Output:
1 2 5 7 9

## Test Case 2:
sample input: 
10 6 3 8 1 4

sample output:
1 3 4 6 8 10

## Level: Easy

## Hints:
- Build a min heap using the elements of the array.
Extract the minimum element from the heap and place it in the sorted portion of the array
- Repeat the extraction process until the array is sorted.

## Approach:
- Take input from the user as elements of the array, separated by spaces.
- Implement the sortArray function that takes the array as input.
- Build a min heap using the buildMinHeap function.
- Extract the minimum element from the heap and place it in the sorted portion of the array.
- Repeat the extraction process until the array is sorted.
- Return the sorted array as the output.
- Print the sorted array.

## Code
[Leetcode](https://leetcode.com/problems/sort-an-array/submissions/1007030747/)

```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  const heap = new MinHeap()
  //Create min heap from the given array
  for(let num of nums)
  heap.push(num)

  const result = []
  // Keep removing the root of heap that is smallest and push to the result array
  while(heap.size() > 0)
  result.push(heap.pop())

  return result  
};
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