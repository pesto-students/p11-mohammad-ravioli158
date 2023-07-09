## Problem Name:
K-th Element of Two Sorted Arrays

## Problem Statement:
Given two sorted arrays arr1 and arr2 of sizes m 
and n respectively, find the K-th smallest element 
among the combined elements of both arrays.


## Input Format:
The first line contains the elements of arr1, separated by spaces.
The second line contains the elements of arr2, separated by spaces.
The third line contains the value of K.

## Output Format:
The K-th smallest element among the combined elements of arr1 and arr2.

## Test Case 1:
Sample Input:
2 4 6 8 10
1 3 5 7 9 11
5

Sample Output:
5

## Test Case 2:
Sample input:
1 2 3 4 5
6 7 8 9 10
7

Sample output:
7

## Level: Hard

## Hints:
- Since the arrays are sorted, you can use binary
search to find the K-th element efficiently.

- Think about how you can divide the search 
space based on the K-th element's position 
in the combined arrays.

## Approach:
Initialize variables left and right as the minimum and maximum possible values for the K-th element.
Perform binary search on the search space until left becomes greater than right.
Calculate the mid index as (left + right) / 2.
Count the number of elements in arr1 and arr2 that are less than or equal to the mid element.
If the count is less than K, update left = mid + 1 to search the right half.
If the count is greater than or equal to K, update right = mid - 1 to search the left half.
Repeat steps 3-6 until left becomes greater than right.
Return left as the K-th smallest element.

## Code

```
function validate(A,B,k,fromA,fromB)
    {
        let l1 = A[fromA-1] ?? Number.NEGATIVE_INFINITY
        let l2 = B[fromB-1] ?? Number.NEGATIVE_INFINITY
        let r1 = A[fromA] ?? Number.POSITIVE_INFINITY
        let r2 = B[fromB] ?? Number.POSITIVE_INFINITY
        console.log(l1,l2,r1, r2)
        if(l1 <= r2 && l2 <= r1)
        {
            return 0
        }else if(l1 >r2){
            return -1
        }else{
            return 1
        }
    }
    function kthElement(A,B,n,m,k){ 
   

        
        let low = 0 //i take no elements from first array
        let high = Math.min(n, k - 1) // I take all elements from firstarray
        while(low <= high){
            let a = Math.floor(low + (high-low)/2) // if we take a elements from first array
            let b = k - 1- a // we take k -a - 1 elemetns from second array
            const result = validate(A, B,k,  a, b)
            if(result == 0){
                //if this pair of a,b satiesfies the condition, that is 
                // When we take a elements from first array and b elemetns from second array, the kth element has all smaller to left and all larger to right
                return Math.min(A[a], B[b])
            }else if(result == -1)
            {
                high = a - 1
            }else
            {
                low = a + 1
            }
        }
    }
    
    // let A =[1,1,1,1]
    // let B = [0, 0, 0, 0, 0]
    // let k = 3
    // let A = [2,3,6,7,9]
    // let B = [1, 4, 8, 10]
    // let k = 5
    let A = [1, 10, 10, 25, 40, 54, 79]
    let B = [15, 24, 27, 32, 33, 39, 48, 68, 82, 88, 90]
    let k = 15
    console.log(kthElement(A,B,A.length,B.length,k))
```