## Problem Statement:
Smallest range heap

## Problem Statement:
Find the Smallest Range that includes at least one element from each of the given k sorted lists


## Input Format:
The user is prompted to enter the number of lists (k).
For each list, the user is prompted to enter the elements separated by spaces.


## Output Format:
The program prints the smallest range that includes at least one element from each of the given k sorted lists.



## Test Case 1:
Sample Input:
3
4 10 15 24
0 9 12 20
5 18 22 30

Sample Output:
9 - 12

## Test Case 2:
sample input: 
4
2 6 9 17
8 12 20 23
4 5 10 18
0 13 16 24

sample output:
5 - 8

## Level: Medium

## Hints:
- Use multiple pointers to track the current position in each list.
Move the pointers in a way that the range is minimized while ensuring at least one element from each list is included.
- Keep track of the maximum value found so far and the list containing it.
Calculate the range whenever all lists have been covered, and update the minimum range if necessary.


## Approach:
- Take input from the user for the number of lists (k).
- Create an empty array lists to store the lists.
- Iterate k times and prompt the user to enter the elements of each list separated by spaces.
- Implement the smallestRange function that takes the lists as input.
- Initialize variables k (number of lists), pointers (an array to track the current position in each list), minRange (minimum range), result (resulting range), maxVal (maximum value found so far), listWithMaxVal (list containing the maximum value), elementsCovered (number of elements covered from each list), and allListsCovered (whether all lists have been covered).
- Iterate until all lists have beencovered:
- a. Find the list with the maximum value among the current pointers.
- b. Move the pointer of the list with the maximum value.
- c. Update the elements covered count.
- d. Check if all lists have been covered.
- e. If all lists have been covered, find the minimum and maximum values among the current pointers.
- f. Calculate the current range.
- g. Update the minimum range if necessary.
- h. Move the pointers back to the previous position for all lists.
- i. Reset the elements covered count.
- j. Check if any list is exhausted.
- Return the result, which represents the smallest range.
- Print the smallest range.

## Code
[Leetcode: 632. Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/submissions/1007676138/)
```
/**
 * @param {number[][]} nums
 * @return {number[]}
 */


var smallestRange = function(nums) {
    // Min heap to store a range from all lists at a time,
    // it gives us max and min

    const heap = new MinHeap()
    let max = null;
    for(let list of nums)
    {
        if(list[0] > max || !max)
        max = list[0]

        heap.push({'list': list, 'val': list[0], 'index':0})
    }
    // Current range that includes all the elements of the lists
    let minRange = [heap.peek().val, max]
    let min ;
    //console.log('start min',minRange)
    while(true){
        // If range can be further reduced by increasing min of current minlist
        min = heap.peek()
       // console.log(heap)
        if(min.index < min.list.length-1)
        {
            //We can further reduce the range by removing min and moving to next in current list
            heap.pop()
            let nextVal = min.list[min.index+1]
            // Keep track of max in the heap, that will be max of our range
            if(nextVal > max)
            max = nextVal
            heap.push({
                'list':min.list,
                'val':nextVal,
                'index':min.index+1
            })
            // if current range is smaller than min rnge , update it
            if((max - heap.peek().val) < (minRange[1] - minRange[0])){
                minRange = [heap.peek().val,max]
            }
        }else{
            break;
        }
        
    }    
    //console.log('min is',min.val, 'max',max)
    if((max - min.val) < (minRange[1] - minRange[0])){
                minRange = [min.val,max]
     }
    return minRange
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
        while(lastIndex > 0 && this.arr[parentIndex]?.val >= this.arr[lastIndex]?.val){
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
        
        if( this.arr[leftIndex]?.val < this.arr[current]?.val)
        minIndex = leftIndex
        
        if(this.arr[rightIndex]?.val < this.arr[minIndex]?.val)
        minIndex = rightIndex
        
        while(this.arr[current]?.val > this.arr[minIndex]?.val){
            // Swap
           
            const temp = this.arr[current]
            this.arr[current] = this.arr[minIndex]
            this.arr[minIndex] = temp
            
            
            // Update minindex
            current = minIndex
            leftIndex = this.getLeftChildIndex(current)
            rightIndex = this.getRightChildIndex(current)
        
            if( this.arr[leftIndex]?.val < this.arr[current]?.val)
            minIndex = leftIndex
        
            if(this.arr[rightIndex]?.val < this.arr[minIndex]?.val)
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