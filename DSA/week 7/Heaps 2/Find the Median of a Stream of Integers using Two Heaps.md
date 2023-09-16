## Problem Statement:
Find the Median of a Stream of Integers using Two Heaps

## Problem Statement:
Write a program to find the median of a stream of integers using two heaps. The program should maintain two heaps, a max heap and a min heap, to efficiently calculate the median as new integers are added to the stream. The median is the middle value of a set of numbers, which divides the set into two equal halves.


## Input Format:
The user is prompted to enter a stream of integers, separated by spaces.


## Output Format:
The program prints the median of the stream of integers.



## Test Case 1:
Sample Input:
5 10 2 8 15

Sample Output:
8

## Test Case 2:
sample input: 
10 20 30 40 50

sample output:
30

## Level: Medium

## Hints:
- Use two heaps: a max heap to store the smaller half of the stream and a min heap to store the larger half.
Maintain the property: size(maxHeap) = size(minHeap) or size(maxHeap) = size(minHeap) + 1.
- Insert the incoming integer into the appropriate heap and balance the heaps if necessary.
Update the current median based on the sizeof the heaps.


## Approach:
- Take input from the user as a stream of integers, separated by spaces.
- Implement two heap data structures: MaxHeap and MinHeap.
- Implement the findMedian function that takes the stream as input.
- Initialize the maxHeap and minHeap.
- Initialize the median variable as null.
- Iterate through each integer in the stream:
- a. If the maxHeap is empty or the number is less than the current median, insert it into the maxHeap.
- b. Otherwise, insert it into the minHeap.
- c. Balance the heaps to maintain the property: size(maxHeap) = size(minHeap) or size(maxHeap) = size(minHeap) + 1.
- d. Update the current median based on the size of the heaps:
If the sizes are equal, calculate the average of the maximum value in maxHeap and the minimum value in minHeap.
If the size of maxHeap is greater, the median is the maximum value in maxHeap.
- e. Return the median.
- Print the median.

## Code
[Leetcode: 295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/submissions/1007020872/)
```

var MedianFinder = function() {
    this.minHeap = new MinHeap()
    this.maxHeap = new MaxHeap()
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.size() == 0){
        this.maxHeap.push(num)
        return
    }
    if(num <= this.maxHeap.peek()){
        //add to maxHeap
        this.maxHeap.push(num)
    }else{
        this.minHeap.push(num)
    }
    
    //If after pushing size becomes uneven more to other side
    if(this.maxHeap.size() - this.minHeap.size() > 1){
        this.minHeap.push(this.maxHeap.pop())
    }
    
    if(this.minHeap.size() - this.maxHeap.size() > 1){
        this.maxHeap.push(this.minHeap.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.minHeap.size() > this.maxHeap.size()){
        return this.minHeap.peek()
    }else if(this.maxHeap.size() > this.minHeap.size()){
        return this.maxHeap.peek()
    }else{
        return (this.minHeap.peek() + this.maxHeap.peek())/2
    }
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
class MaxHeap{
    constructor(){
        this.arr = []
    }
    
    push(val){
        this.arr.push(val)
        this.heapifyUp()
    }
    
    pop(){
        
        if(this.size() == 0)
        return null
        
        //Swap root with last element and then pop the last element
        
        const temp = this.arr[this.arr.length - 1]
        this.arr[this.arr.length - 1] = this.arr[0]
        this.arr[0] =  temp
        // Starting at the root node, heapify down while maintaining the max heap property
        const popVal = this.arr.pop()
        this.heapifyDown()
        return popVal
        
    }
    peek(){
        return this.arr[0]
    }
    // Starting from last index, heapify up while maintaining max heap property
    heapifyUp(){
        let currentIndex = this.arr.length - 1
        let parentIndex = this.parentIndex(currentIndex)
        while(this.arr[parentIndex] < this.arr[currentIndex]){
            // If parent is smaller, swap the values
            const temp = this.arr[parentIndex]
            this.arr[parentIndex] = this.arr[currentIndex]
            this.arr[currentIndex] = temp
            currentIndex = parentIndex
            parentIndex = this.parentIndex(currentIndex)
            
        }
    }
    
    heapifyDown(){
        // Start at the root node and compare with child nodes, swap with the max
        let currentIndex = 0
        let maxIndex = 0
        let leftIndex = this.leftChildIndex(currentIndex)
        let rightIndex = this.rightChildIndex(currentIndex)
        
        if(this.arr[leftIndex] > this.arr[currentIndex])
        maxIndex = leftIndex
        
        if(this.arr[rightIndex] > this.arr[maxIndex])
        maxIndex = rightIndex
        
        while(this.arr[maxIndex] > this.arr[currentIndex]){
            //swap them
            const temp = this.arr[maxIndex]
            this.arr[maxIndex] = this.arr[currentIndex]
            this.arr[currentIndex] = temp
            
            currentIndex = maxIndex
            leftIndex = this.leftChildIndex(currentIndex)
            rightIndex = this.rightChildIndex(currentIndex)
        
            if(this.arr[leftIndex] > this.arr[currentIndex])
            maxIndex = leftIndex
        
            if(this.arr[rightIndex] > this.arr[maxIndex])
            maxIndex = rightIndex
        }

    }
    
    size(){
        return this.arr.length
    }
    
    parentIndex(index){
        return Math.floor((index-1)/2)
    }
    
    leftChildIndex(index){
        return 2 * index + 1
    }
    
    rightChildIndex(index){
        return 2 * index + 2
    }
}

```