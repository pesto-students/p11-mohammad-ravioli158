## Problem Name:
Min in Rotated Array

## Problem Statement:
Find Minimum in Rotated Sorted Array


## Input Format:
The user is prompted to enter the array 
elements separated by spaces.

## Output Format:
The minimum element in 
the array is printed.

## Test Case 1:
Sample Input:
4 5 6 7 0 1 2

Sample Output:
0

## Test Case 2:
Sample input:
1 2 3 4 5

Sample output:
1

## Level: Medium

## Hints:
- The array is sorted, but it has been rotated.

- The minimum element is the only element i
n the array that is smaller than its previous 
element.

## Approach:
Start with the left pointer left at index 0 and the right pointer right at the last index of 
the array.
While left is less than right, calculate the middle index mid as the average of left and
right.
If the middle element nums[mid] is greater than the last element nums[right], it means 
the minimum element lies on the right side of mid. Therefore, update left = mid + 1.
Otherwise, the minimum element lies on the left side of mid or mid itself is the
minimum. In this case, update right = mid.
Repeat steps 2-4 until left is equal to right. At this point, left (or right) will be pointing
to the minimum element.
Return the minimum element.

## Code
[LeetCode: Minimum is rotated sorted array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/submissions/978388269/)

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0
    let high = nums.length - 1
    //if already sorted
    if(nums[low] <= nums[high])
    {
        return nums[low]
    }

    //if rotated
    while(low <= high){
        let mid = Math.floor(low + (high-low)/2)
        if(nums[mid-1] > nums[mid])
        {
            return nums[mid]
        }
        else if(nums[low] <= nums[mid] && nums[mid] > nums[high])
        {
            //higher part so ignore it and go right
            low = mid + 1
            
        } else{
            high = mid - 1
            
        }

    }
};
```