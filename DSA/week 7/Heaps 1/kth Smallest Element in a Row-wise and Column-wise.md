## Problem Statement:
kth Smallest Element in a Row-wise and Column-wise

## Problem Statement:
Find the kth Smallest Element in a Row-wise and Column-wise Sorted Matrix using a Min Heap

## Input Format:
The user is prompted to enter the number of rows and columns of the matrix.
For each row, the user is prompted to enter the elements separated by commas.
The user is prompted to enter the value of k.

## Output Format:
The program prints the kth smallest element in the matrix.


## Test Case 1:
Sample Input:
- 3
- 3
- 1,3,5
- 2,4,7
- 6,8,9
- 3

Sample Output:
3

## Test Case 2:
sample input: 
- 2
- 4
- 2,4,7,9
- 3,5,8,10
- 6

sample output:
7

## Level: Hard

## Hints:
- Create a min heap to track the smallest elements from each row.
Insert the first element from each row into the heap along with their respective row and column indices.
Build the min heap using the buildMinHeap function.
- Extract the kth smallest element from the heap by repeatedly extracting the smallest element and replacing it with the next element in the same row (if available) or removing it from the heap.
The kth smallest element will be the result.

## Approach:
- Take input from the user for the number of rows, number of columns, matrix elements, and the value of k.
- Implement the findKthSmallest function that takes the matrix and k as input.
- Create an empty min heap.
- Iterate over each row of the matrix and insert the first element from each row into the heap along with their respective row and - - column indices.
- Build the min heap using the buildMinHeap function.
- Extract the kth smallest element from the heap by repeatedly extracting the smallest element and replacing it with the next - - - element in the same row (if available) or removing it from the heap.
- Return the kth smallest element as the result.
- Print the kth smallest element.
## Code
```
function kthSmallest(arr,l,r,k){
      const maxHeap = new MaxHeap()
      //Add first k elements to max heap,
      let index = 0
      for(; index < k; index++)
      maxHeap.push(arr[index])
      
      // Maintain group of smallset k elements by only pushing if the new value is smaller than highest in the group
      
      while(index < arr.length)
      {
          if(arr[index] < maxHeap.peek())
          {
              maxHeap.pop()
              maxHeap.push(arr[index])
          }
          index++
      }
      return  maxHeap.peek()
}


/** Heap Implementation **/
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